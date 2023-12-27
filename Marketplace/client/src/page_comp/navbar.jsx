import React, { useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Navbar() {
  const [productsaved, setProductsaved] = useState([]);
  const [userProducts, setUserProducts] = useState([]);
  const [bestprod,setBestprod]=useState([])
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searching,setSearching]=useState("")
  const [searched,setSearched]=useState([])
  const [length,setLength]=useState(null)
  const location = useLocation();
console.log(searched);

 let oneprod={
  name:searching
 }
  useEffect(()=>{
    bprod()
    saved()
  },[productsaved.length ])
  let bprod=()=>{
    axios.get("http://localhost:3000/api/navbar/bestprod")
    .then(res=>{
      setBestprod(res.data)
      console.log("bestget",res.data)
    })
    .catch(err=>{console.error(err);})
  }


  let saved=()=>{
    axios.get("http://localhost:3000/api/navbar/seved")
    .then((res)=>{setProductsaved(res.data)
      setLength(res.data.length)
    console.log("saved list:",res.data);
    })
    .catch((err)=>{console.error(err);})
}

  let search=(prod)=>{
    axios.get("http://localhost:3000/api/navbar/search",prod)
    .then((res)=>{
      setSearched(res.data)
      console.log("finded",res.data);
    })
    .catch(err=>{console.error(err);})
  }


    const top100Films=bestprod;


    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
console.log(length);
  return (
    <div>
      <nav>
        <p className='nav_mess'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="" className='link_nav' >ShopNow</a> </p>
      </nav>
      <header>
        <div>
          <h1 className='title_nav'>MarketPlaces</h1>
        </div>
        <div className='div1_nav'>
        <ul className="ul_nav">
        <li className="li_navbar">
        <Link to="/home" className={`link ${location.pathname === "/home" ? "active" : ""}`}>
          Home
        </Link>
      </li>
      <li className="li_navbar">
        <Link to="/contact" className={`link ${location.pathname === "/contact" ? "active" : ""}`}>
          Contact
        </Link>
      </li>
      <li className="li_navbar">
        <Link to="/about"  className={`link ${location.pathname === "/about" ? "active" : ""}`}>
          About Us
        </Link>
      </li>
      <li className="li_navbar">
        <Link to="/" className={`link ${location.pathname === "/home" ? "active" : ""}`}>
          Sign-up
        </Link>
      </li>
    </ul>
        </div>
        <div className='div2_nav'>
          <Stack spacing={2} sx={{ width: 300 }} className='stack_nav'>
            <Autocomplete
              className='search_nav'
              id="free-solo-demo"
              freeSolo
              options={top100Films.map((option) => option.name)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='What are you looking for?'
                  onChange={(e)=>{setSearching(e.target.value)}}

                />
              )}
            />
            <button className='search_icon' onClick={()=>{search(oneprod)}}><SearchIcon /></button>
          </Stack>
          <div className='icons_nav'>
            <button className='nav_icons'>
              <Badge badgeContent={length} color='error'>
                <Link to='/wish'>
                  <FavoriteBorderIcon />
                </Link>
              </Badge>
            </button>
            <button className='nav_icons'>
              <Badge color='error' variant='dot'>
                <ShoppingCartCheckoutIcon />
              </Badge>
            </button>
            <button className='nav_icons'>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem > <NavLink
    className="link"
    activeClassName="active"
    to="/account"
  >
    My account
  </NavLink></MenuItem>
              </Menu>
            </button>
          </div>
        </div>
      </header>
      <hr />
    </div>
  );
}

export default Navbar;