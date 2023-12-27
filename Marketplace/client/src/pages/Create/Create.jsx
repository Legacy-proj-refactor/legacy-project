import axios from "axios";
import React, { useEffect, useState } from "react";
import "./create.css";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { Link } from "react-router-dom";
import SideBar from "../../Account/SideBar";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Cookies from "js-cookie";
function Create() {
  const ariaLabel = { "aria-label": "description" };

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [des, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const [color, setColor] = useState("");
  const [last, setLast] = useState("");
  const [newp, setNewprice] = useState("");
  const [size, setSize] = useState("");
  const [seller, setSeller] = useState("");
  const [cate, setCate] = useState([]);
  const [category, setCategory] = useState("");
  const [user, setUser] = useState({});
  const [idu, setIdu] = useState("");
  const [file,setFile]=useState(null)
const[refresh,setRefresh]=useState(false)

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


  useEffect(() => {
    axios
      .get("http://localhost:3000/api/categories/get")
      .then((res) => {
        const idd = Cookies.get("id");
        setCate(res.data);
        setRefresh(refresh)
        setIdu(idd);
        console.log("categories", res.data);
        if (idu)
          axios
            .get("http://localhost:3000/api/product/jib/" + idu)
            .then((ress) => {
              setUser(ress.data[0].name);
            })
            .catch((err) => {
              console.log(err);
            });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idu,!refresh]);

  const uploadImage = ()=>{
 
    const data =new FormData()
    data.append('file', file)
    data.append("upload_preset" , "marketplace")
    console.log("data",data,file);
    const obj={}
    obj.file=file
    obj.upload_preset = "marketplace"
    console.log(obj);
    fetch("https://api.cloudinary.com/v1_1/doytchn8h/image/upload",
    {
        method:"post",
        body:data
    }
    )
    .then((resp)=>resp.json())
    .then(
        result=>{
            console.log(result);
            setImage(result.secure_url)}
    )
    .catch(err=>{console.error("error cloudinary",err);})
  }


  const add = () => {
    const obj = {
      name: name,
      image: [image],
      lastprice: last,
      newprice: newp,
      categorys_idcat: category,
      users_idu: idu,
      rate: rate,
      discription: des,
      color: color,
      size: size,
      sellername: user,
    };
    console.log(obj);
    axios
      .post("http://localhost:3000/api/product/add", obj)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(user);

  return (
    <div className="post-form">
      <h1>Create a new Product</h1>

      <Input
        className="input-field"
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        className="input-field"
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input
        className="input-field"
        type="number"
        placeholder="Rate"
        onChange={(e) => setRate(e.target.value)}
      />
      <Input
        className="input-field"
        type="text"
        placeholder="color"
        onChange={(e) => setColor(e.target.value)}
      />
      <Input
        className="input-field"
        type="number"
        placeholder="last price"
        onChange={(e) => setLast(e.target.value)}
      />
      <Input
        className="input-field"
        type="number"
        placeholder="New price"
        onChange={(e) => setNewprice(e.target.value)}
      />
      <Input
        className="input-field"
        type="text"
        placeholder="Size"
        onChange={(e) => setSize(e.target.value)}
      />
      <h4 className='h4_admin'>Image : </h4>
                            <Button  sx={{"margin-left":"35px"}} component="label"  variant="contained" startIcon={<CloudUploadIcon />}>
                            Upload file
                            <VisuallyHiddenInput type="file" onChange={(e) => setFile(e.target.files[0])} />
                            </Button>
                            <Button sx={{"margin-right":"5em"}} onClick={()=>{uploadImage()
                            console.log(file)}}>valider</Button>

      {cate.length > 0 && (
        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Category"
            defaultValue={""}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            {cate.map((el, i) => (
              <MenuItem key={i} value={el.idcat}>
                {el.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      <div className="button-container">
        <button
          className="add-button"  
          onClick={() => {
            add();
          }}
        >
          <Link to="/home">Add</Link>
        </button>
      </div>
      <SideBar/>
    </div>
  );
}

export default Create;
