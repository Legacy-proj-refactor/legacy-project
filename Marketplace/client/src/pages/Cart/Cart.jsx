import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useLocation } from 'react-router-dom';
import './Cart.css';

function Card() {
  const [data1, setData] = useState([]);
  const [quantity, setQuantity] = useState(1);



  const location = useLocation();
  const one = location.state.one
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/Oneproduct/getOne/${one.idp}`)
      .then((result) => {
        setData(result.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [one.id]);
  

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setData(data1.filter((product) => product.id !== productId));
  };

  const subtotal = data1.reduce((acc, el) => acc + el.newprice * quantity, 0);

  return (
    <div>
      <div className="cardliste">
       <h3>Remove</h3>
        <h3>Product</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Subtotal</h3>
        
      </div>
      {data1.map((el, i) => (
        <div key={i} className='procard'>
          <div className="remove-button-container">
            <IconButton color="error" onClick={() => handleRemoveFromCart(el.id)}>
              <RemoveIcon />
            </IconButton>
          </div>

          <img className='imgcard' src={el.image[0]} alt="" />
          <h3>$ {el.newprice}</h3>
          <div>
            <IconButton color="inherit" onClick={handleDecrement}>
              <RemoveIcon />
            </IconButton>
            <Typography variant="body2">{quantity}</Typography>
            <IconButton color="inherit" onClick={handleIncrement}>
              <AddIcon />
            </IconButton>
          </div>
          <h3>$ {el.newprice * quantity}</h3>
        </div>
      ))}
      
      <div className="cart-total-container">
        <h1>Cart Total</h1>
        <div className="under">
          <h5 className='subtotal'>
            Subtotal: ${subtotal}
            <span className="line"></span>
          </h5>
          <h5 className='shipping'>
            Shipping: Free
            <span className="line"></span>
          </h5>
          <h3>
            Total: ${subtotal}
          </h3>
        </div>
        <Button variant="contained" color="error">
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}

export default Card;
