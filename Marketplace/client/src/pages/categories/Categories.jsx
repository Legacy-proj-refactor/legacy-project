import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Products from '../products/Products';
import './categories.css';
import { Link, useNavigate } from 'react-router-dom';

function Categories({setRefresh,refresh,setCategorie}) {
 
  console.log(setCategorie);
 
  const [categories, setCategories] = useState([]);


  const navigate=useNavigate()

  
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/categories/get')
      .then((res) => {
        console.log("categories",res.data);
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [!refresh]);

  const handleCategoryClick = (categorys_id) => {
    console.log("here",categorys_id);
    setCategorie(categorys_id);
    navigate('/products')
    
  };

  return (
    <div className='Category'>
      {categories.map((category, i) => (
        <div className='cat-m' key={i} onClick={() => handleCategoryClick(category.idcat)}>
          <img className='cat-im' src={category.image}/>
          <h1 className="cat-h1" >{category.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default Categories;
