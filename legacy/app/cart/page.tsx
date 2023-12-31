
"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Correct import statement
import { Button, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import axios from 'axios';
import Link from 'next/link';

const Cart: React.FC = () => {
  interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
  }

  interface CartState {
    cartItems: Product[];
    quantity: number;
  }

  const [state, setState] = useState<CartState>({
    cartItems: [],
    quantity: 1,
  });

 
  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const response = await fetch('http://localhost:3000/api/product/getC');

        if (response.ok) {
          const data: Product[] = await response.json();
          setState((prevState) => ({ ...prevState, cartItems: data }));
        } else {
          throw new Error('Error fetching all products');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const handleIncrement = () => {
    setState((prevState) => ({ ...prevState, quantity: prevState.quantity + 1 }));
  };

  const handleDecrement = () => {
    if (state.quantity > 1) {
      setState((prevState) => ({ ...prevState, quantity: prevState.quantity - 1 }));
    }
  };

  const handleRemoveFromCart = (productId: number) => {
    setState((prevState) => ({
      ...prevState,
      cartItems: prevState.cartItems.filter((product) => product.id!== productId),
    }));
  };

  const subtotal = state.cartItems.reduce((acc, el) => acc + el.price * state.quantity, 0);

  return (
    <div>
      <div className="cardliste">
        <h3>Remove</h3>
        <h3>Product</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Subtotal</h3>
      </div>
      {state.cartItems.map((el, i) => (
        <div key={i} className='procard'>
          <div className="remove-button-container">
            <Button color="error" onClick={() => handleRemoveFromCart(el.id)}>
              <RemoveIcon />
            </Button>
          </div>
        <img className='imgcard' src={el.image[0]} alt="" />
        <h3 className='h3'>$ {el.price}</h3>
          <div>
          <IconButton color="inherit" onClick={handleDecrement}>
              <RemoveIcon />
            </IconButton>
            <Typography variant="body2">{state.quantity}</Typography>
            <IconButton color="inherit" onClick={handleIncrement}>
              <AddIcon />
            </IconButton>
          </div>
          <h3 className='h3'>$ {el.price * state.quantity}</h3>
        </div>
      ))}

      <div className="cart-total-container">
        <h1 className='a'>Cart Total</h1>
        <div className="under">
          <h5 className='subtotal'>
            Subtotal:<h1  className='b'>${subtotal}</h1>
            <span className="line"></span>
          </h5>
          <h5 className='shipping'>
            Shipping: <h1  className='b'>Free</h1>
            <span className="line"></span>
          </h5>
          <h5 className='shipping'>
            Total: <h1 className='b'>${subtotal}</h1>
          </h5>
        </div>
        <Link href="/flousi">
        <button className="bt">
          Proces to Checkout
        </button>
      </Link>
      </div>
    </div>
  );
};

export default Cart;
