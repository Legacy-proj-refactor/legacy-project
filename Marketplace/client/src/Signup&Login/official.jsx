import React, { useState } from 'react'
import Signup from './signup'
import Login from './login'
import Navbar from '../page_comp/navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Official({adduser,getone,setOne}) {
    const [view,setView]=useState("signup")
    const changeView=(x)=>{
        setView(x)
    }
  return (
    <>
   
    <div className='div1_off'>
        <article className='article1_off'>
            <img  className='img_off' src="https://img.freepik.com/vecteurs-premium/rendu-dessin-anime-vectoriel-3d-smartphone-application-achat-ligne-panier-banniere-conception-devise-dollar_624031-401.jpg" alt="" />
        </article>
        <article className='article2_off'>
            {view==="signup"?<Signup  adduser={adduser} change={changeView}/>:<Login getone={getone} setOne={setOne} />}
         </article>
    </div>
    </>   
  )
}

export default Official