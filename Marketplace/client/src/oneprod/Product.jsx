import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Rating, TextField, InputAdornment, IconButton, Box } from '@mui/material';
import Radio from '@mui/material/Radio';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import Cookies from "js-cookie"
import "./Pro.css"


function Product() {

  const[data,setData]=useState([])
  const [selectedValue, setSelectedValue] =useState('a');
  const [quantity, setQuantity] = useState(1)
  const [mainImage, setMainImage] = useState("")
  const [selectedButton, setSelectedButton] = useState(null);
  const [size,setSize]=useState("")
const id = Cookies.get("id")

  
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  
  const location = useLocation();
  const one = location.state.one
  
  useEffect(() => {
    axios
.get(`http://localhost:3000/api/Oneproduct/getOne/${one.idp}`)
      .then((result) => {
        setData(result.data);
        setMainImage(result.data[0].image[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

const HandleFav =(obj) =>{
  axios.post(`http://localhost:3000/api/product/addFav`,obj).then((resss)=>{
    console.log("added");
 
  }).catch((err)=>{
    console.log(err);
  })
}


  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleQuantityChange = (value) => {
    setQuantity(Math.max(1, quantity + value));
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  const handleImage = (image) => {
    setMainImage(image);
  };

  const handleClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  const handleSize=(newSize)=>{
    setSize(newSize)
  }
console.log("ge",id);

  return (
    <div>
      {data.map((one, i) => {
        return (
          <div key={i}>
            {/* name rate price description */}
            <div className='p1'>
            <div className='productName'>
              <h1 className='name'>{one.name}</h1>
              <div className='rate'>
                <Rating name="read-only" value={one.rate} readOnly />
                <h6 className='review'>(17 Reviews) | </h6>
                <h6 className='instock'>In Stock</h6>
              </div>
              <div>
              <h3 className='price1' color=''>$ {one.newprice}</h3>
              <h3 className='price2'>$ {one.lastprice}</h3>
              </div>
              
              <h6 className='description'>{one.discription}</h6>
            </div>
            {/* color */}
            <div classame="productColor">
              <h4>
                Colours :
                <Radio {...controlProps('a')} />
                <Radio {...controlProps('b')} color="secondary" />
                <Radio {...controlProps('d')} color="default" />
              </h4>
            </div>
            {/* size */}
            <div className="productSize">
                <h4> Size :
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button  style={{
           marginRight: '15px',
           borderRadius: '8px', 
           fontSize: '12px', 
           padding: '6px 12px',             
          backgroundColor: selectedButton === 0 ? 'red' : 'white',
          color: selectedButton === 0 ? 'white' : 'black',
          border: selectedButton !== 0 ? '2px solid black' : 'none'
        }}
        onClick={() => {
            handleClick(0);
            handleSize("XS");
          }}>XS</Button>
                    <Button style={{
          marginRight: '15px',
          borderRadius: '8px', 
          fontSize: '12px', 
          padding: '6px 12px',
          backgroundColor: selectedButton === 1 ? 'red' : 'white',
          color: selectedButton === 1 ? 'white' : 'black',
          border: selectedButton !== 1 ? '2px solid black' : 'none'
        }}
        onClick={() => {
            handleClick(1);
            handleSize("S");
          }}>S</Button>
                    <Button style={{
          marginRight: '15px',
          borderRadius: '8px', 
          fontSize: '12px', 
          padding: '6px 12px',
          backgroundColor: selectedButton === 2 ? 'red' : 'white',
          color: selectedButton === 2 ? 'white' : 'black',
          border: selectedButton !== 2 ? '2px solid black' : 'none'
        }}
        onClick={() => {
            handleClick(2);
            handleSize("M");
          }}>M</Button>
                    <Button style={{
          marginRight: '15px',
          borderRadius: '8px', 
          fontSize: '12px', 
          padding: '6px 12px',
          backgroundColor: selectedButton === 3 ? 'red' : 'white',
          color: selectedButton ===  3 ? 'white' : 'black',
          border: selectedButton !== 3 ? '2px solid black' : 'none'
        }}
        onClick={() => {
            handleClick(3);
            handleSize("L");
          }}>L</Button>
                    <Button style={{
          marginRight: '15px',
          borderRadius: '8px', 
          fontSize: '12px', 
          padding: '6px 12px',
          backgroundColor: selectedButton === 4 ? 'red' : 'white',
          color: selectedButton === 4 ? 'white' : 'black',
          border: selectedButton !== 4 ? '2px solid black' : 'none'
        }}
        onClick={() => {
            handleClick(4);
            handleSize("XL");
          }}>XL</Button>
               </ButtonGroup>
                </h4>
            </div>
            {/* quantity */}
            <div className="productQuantity">
                <div className='q'>
              <TextField
                label="Quantity"
                type="number"
                width="15px"
                value={quantity}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        onClick={() => handleQuantityChange(-1)}
                        edge="start"
                        color="primary"
                      >
                        <Box
                          bgcolor="white"
                          color="black"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          width="40px"
                          height="40px"
                          borderRadius="1px"
                        >
                          <AddIcon />
                        </Box>
                        
                      </IconButton>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => handleQuantityChange(1)}
                        edge="end"
                        color="primary"
                      >
                        <Box
                          bgcolor="red"
                          color="white"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          width="40px"
                          height="40px"
                          borderRadius="1px"
                        >
                          <RemoveIcon />
                        </Box>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              </div >
            <div className='q'>
            <Button variant="contained" color="error" >
            <Link to="/card" state={{one:one}}>BUY</Link>
            </Button> 
            </div>

            <div className='q'>
            <Checkbox {...label} icon={<FavoriteBorder color="error"/>} onClick={()=>{HandleFav({product_idp:one.idp,users_idu:id})}} checkedIcon={<Favorite color="error"/>  } />
            </div>    
            </div>
            </div>
            {/* image */}

            <div className='productImage'>
            <div className='smallImages'>
                {one.image.map((image, index) => (
                  <div key={index} className='smallImage' onMouseOver={() => handleImage(image)} onMouseLeave={()=>setMainImage(data[0].image[0])}>
                    <img src={image} alt="" />
                  </div>
                ))}
              </div>
              <div className='mainImage'>
                <img src={mainImage} alt="" />
              </div>
              
            </div>
          </div>
        );
      })}
       
    </div>
  );
}

export default Product;
