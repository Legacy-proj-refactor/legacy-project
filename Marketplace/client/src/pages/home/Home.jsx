import React, { useEffect, useState } from 'react';
import Categories from '../categories/Categories';
import Box from '@mui/material/Box';
import { Rating } from '@mui/material';
import axios from 'axios';
import './For.css';
import Nouv from '../Nouveau/Nouv';
import Bas from '../Bas/Bas';

function Home({ setRefresh, refresh, setCategorie }) {
  const [allProducts, setAllProducts] = useState([]);
  const [showAllProducts, setShowAllProducts] = useState(false);
 

  useEffect(() => {
    axios.get('http://localhost:3000/api/product/get')
      .then((res) => {
        setAllProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleShowAllProducts = () => {
    setShowAllProducts(true);
  };

  let displayedProducts;

  if (showAllProducts) {
    displayedProducts = allProducts;
  } else {
    displayedProducts = allProducts.slice(0, 4)
  }

  return (
    <div className="home-container">
      <h1 id="title" className="titles">Bienvenue sur notre site de vente en ligne !</h1>
      <div className='slide-container'>
  <Nouv />
</div>

      <div className="container">
        <h1 className='cont-h2'>Browse By Category</h1>
        <Box sx={{ width: '80%', flexBasis: '70%' }}>
          <Categories setRefresh={setRefresh} refresh={refresh} setCategorie={setCategorie} />
        </Box>
      </div>
      <div>
        <h1 className='cont-h1'>Explore Our Products</h1>
        <div className='button-1'></div>
        <Box className="image-box-container">
          {displayedProducts.map((el, i) => (
           <div key={i} className="image-box">
           <img className="product-image" src={el.image[0]} alt={el.name} />
           <h3>{el.name}</h3>
           <div className='flous'>
               <h4 className='price1'>${el.newprice}</h4>
               <h4 className='price2'>${el.lastprice}</h4>
           </div>
           <Rating name="read-only" value={el.rate} readOnly />
           <button className="add-to-cart-button">Add to Cart</button>
       </div>
       
          ))}
        </Box>
        <div className='button-2'>
          <button className='show-all1' onClick={handleShowAllProducts} > <h1>Show All </h1></button>
        </div>
      </div>
      <div>
          <Bas />
      </div>
    </div>
  );
}

export default Home;
