import React, { useState } from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx"
import Products from "./pages/products/Products.jsx";
import Create from "./pages/Create/Create.jsx";
import Official from "./Signup&Login/official";
import axios from "axios"
import Navbar from "./page_comp/navbar";
import Account from "./Account/Account.jsx";
import Footer from "./Footer/Footer.jsx";
import SideBar from "./Account/SideBar.jsx";
import './App.css';
import Admin from "./admin/Admin.jsx";
import Dashboard from "./admin/Dashboard.jsx";
import About from "./pages/About/About.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Product from "./oneprod/Product.jsx";
import Wish from "./pages/Wishlist/Wish.jsx";
import Add from "./pages/Add categories/Add.jsx";
import Search from "@mui/icons-material/Search.js";
import Contact from "./contact/Contact.jsx";
import Error from "../src/error/Error.jsx"


function App() {


  const [shownav,setShownav]=useState(true)
  const [idCategorie,setCategorie]=useState(0)

  console.log(idCategorie);

const [refresh,setRefresh]=useState(false)


axios.defaults.withCredentials=true


  return (
    <div>
      <BrowserRouter>
       {shownav&&<Navbar/>}
        <Routes>
          <Route path="/" element={<Official />}></Route>
          <Route path="/home" element={<Home setRefresh={setRefresh} refresh={refresh} setCategorie={setCategorie}/>}></Route>
          <Route path="/products" element={<Products idCategorie={idCategorie} />}></Route> 
          <Route path="/create" element={<Create />}></Route>
         <Route path="/add" element={<Add />}></Route>
          <Route path ="/sideBar" element={<SideBar/>} />
         <Route path="/account" element={<Account/>} /> 
          <Route path="/one" element={<Product/>}> </Route>
          <Route path="/admin" element={<Admin shownav={setShownav}/>} ></Route>
          <Route path="/card" element={<Cart/>}> </Route>
          <Route path="/admin/dashboard" element={<Dashboard shownav={setShownav}/>}></Route>
          <Route path="/contact" element={<Contact />} />
           <Route path="*" element={<Error/>}></Route>
          <Route path="/Wish" element={<Wish/>}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
        <div className="footer-div">
        {shownav&&<Footer/>}  
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;