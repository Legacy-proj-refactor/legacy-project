import React, { useEffect, useState } from "react";
import axios from "axios";
import "./products.css";
import { Link } from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Badge from '@mui/material/Badge';
import { Rating } from '@mui/material';

function Products({ idCategorie }) {
  console.log(idCategorie);
  const [products, setProducts] = useState([]);
  const[data,setData]=useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/product/get/${idCategorie}`)
      .then((res) => {
        console.log("products", res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [idCategorie]);

  const oneproduct=(idp)=>{
    axios
    .get(`http://localhost:3000/api/Oneproduct/getOne/${idp}`)

          .then((result) => {setData(result.data)
            console.log("here",result.data);
          })
          .catch((err) => {
            console.log(err);
          });
  }

  return (
    <div className="product-item">
      {products.map((product, i) => (
        <div className="image-box" key={i}>
          <img className="product-image" src={product.image[0]} />
          <div>
            <h3>{product.name}</h3>
            <div className='flous'>
               <h4 className='price1'>${product.newprice}</h4>
               <h4 className='price2'>${product.lastprice}</h4>
           </div>
           <Rating name="read-only" value={product.rate} readOnly />
           </div>
           
           <div>
          <button className='add-to-cart-button'>
            
    <Link to="/card" state={{one:product}}><h5 className="addto">ADD TO CART</h5></Link>
    </button >
    </div>
          
          <div className="show more"> <br />
        <p><Link to="/one" state={{one:product}}> <RemoveRedEyeIcon/></Link></p>
        </div>
         
        </div>
      ))}
   
    </div>
  );
}

export default Products;