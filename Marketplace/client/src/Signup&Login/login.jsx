import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"

function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [showemail,setShowemail]=useState(false)
  const [showpass,setShowpass]=useState(false)
  const [alert,setAlert]=useState(false)
  const [oneuser,setOneuser]=useState([])
  const navigate=useNavigate()


  axios.defaults.withCredentials=true
  console.log('oneuser getted', oneuser);
  let info={
    email:email,
    password:password
  }
//////FUNCTION///////


const getone = (infoo) => {
  console.log(infoo);
  axios.post("http://localhost:3000/api/market/oneuser", infoo)
    .then((res) => {
      const token= res.data.token 
      
      setOneuser(res.data.user)
      console.log("hello",res.data.rols);
      console.log("here",res.data.rols);
      Cookies.set('token',token,{expires:60*60*24})
      Cookies.set('id',res.data.idu)

      console.log(res.data);
        setAlert(false);  
        navigate("/home")
       
      
    })
    .catch(err => {
      setAlert(true);
      console.error(err);
    });
};



const handleValue=(set,e)=>{
  set(e.target.value)
}
//////////////CSS///////////////
    const sty={
        "background-color": "rgb(244, 77, 77)",
        "color": "white",
        height: "6vh",
        width:"150px",
        "font-size": "16px",
        "font-family":"Franklin Gothic Medium",
        "margin-bottom ": "2em",
    }
    const sty2={
        "color": "red",
        height: "6vh",
        "font-size": "16px",
        "font-family":"Franklin Gothic Medium",
        "margin-bottom": "2em",
        "border": "none"
    }
  return (
    <div>
      {alert&& <div>
        <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">Incorrect information</Alert>
        </Stack>
      </div> }
     <h1 className='title_signup' >Log in to MarketPlace</h1>
     <p className='p_signup'>Enter your details below</p>
    <div>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='input_sign'><TextField  onChange={(e)=>{handleValue(setEmail,e)}} sx={{'& > :not(style)': { width: '50ch' },}} type='email' id="standard-basic" label="Email or Phone Number" variant="standard" /></div>
      <div className='input_sign'><TextField  onChange={(e)=>{handleValue(setPassword,e)}} sx={{'& > :not(style)': { width: '50ch' },}} type='password' id="standard-basic" label="Password" variant="standard" /></div>
    </Box>
        </div>
        <div>
        <Stack  spacing={17} direction="row" >
            <Button  onClick={()=>{getone(info)}} style={sty}>Log In</Button>
            <Button   style={sty2} >Forget Password?</Button>
        </Stack>
        </div>
    </div>
  )
}

export default Login