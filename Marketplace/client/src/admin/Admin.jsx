import React, { useEffect, useState } from 'react'
import { TextField, Button, Container, Grid, Paper } from '@mui/material';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';


function Admin({shownav}) {
    const [admins,setAdmins]=useState([])
    const navigate=useNavigate()
    shownav(false)
useEffect(()=>{
    getadmin()
},[])


    let getadmin=()=>{
        axios.get("http://localhost:3000/api/admin/getadmin")
        .then((res)=>{
            setAdmins(res.data)
            console.log(res.data);
        })
    }

    return (
    <div>
        <Container>
      <Grid container justifyContent="center" alignItems="center" style={{ height: '60vh' }}>
        <Grid item xs={7}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <h2>Admin information :</h2>
            <form>
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: 20 }}
                onClick={()=>{navigate("/admin/dashboard")}}
              >
                Login
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    </div>
  )
}

export default Admin