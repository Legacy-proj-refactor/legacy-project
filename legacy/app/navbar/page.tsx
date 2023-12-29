"use client"
import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Link from 'next/link';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';


function Navbar() {
  const [activeIndex, setActiveIndex]=useState<number|null>(null)
  const [auth, setAuth] =useState<boolean>(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searched,setSearched]=useState([])

  const handleItemClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const handleMenu = (event:React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  interface Product {
    name: string;
  }
  const search = async (prod: Product): Promise<void> => {
    try {
      const response = await fetch(`http://localhost:3000/api/navbar/search?name=${encodeURIComponent(prod.name)}`);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data: Product[] = await response.json();
      if(Array.isArray(data)){
      setSearched(data);
      console.log("finded", data);}
    } catch (error) {
      console.error(error);
    }
  };
 
  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 }]
  return (
    <div>
      <nav className='text-center  pt-4 bg-black h-14'>
        <p className='text-white'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="" className='link_nav' >ShopNow</a> </p>
      </nav>
      <header className='pl-20 h-40 pt-12'>
      <div className='flex items-center '>
            <h1 className='text-3xl font-bold  ' >MarketPlace</h1>
            <ul className="flex ml-96">
        <li
          className={`mr-16 text-2xl cursor-pointer ${
            activeIndex === 0 ? 'underline' : ''
          }`}
          onClick={() => handleItemClick(0)}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`mr-16 text-2xl cursor-pointer ${
            activeIndex === 1 ? 'underline' : ''
          }`}
          onClick={() => handleItemClick(1)}
        >
          <Link href="/contact">Contact</Link>
        </li>
        <li
          className={`mr-16 text-2xl cursor-pointer ${
            activeIndex === 2 ? 'underline' : ''
          }`}
          onClick={() => handleItemClick(2)}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={`mr-16 text-2xl cursor-pointer ${
            activeIndex === 3 ? 'underline' : ''
          }`}
          onClick={() => handleItemClick(3)}
        >
          <Link href="/signup">Sign up</Link>
        </li>
      </ul>
            <Stack className='w-52 ml-40'>
            <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
            </Stack>
            <Badge badgeContent={4} color="secondary">
            <FavoriteBorderIcon className='ml-10'/>
            </Badge>
            <Badge color="secondary" variant="dot">
            <AddShoppingCartIcon className='ml-10'/>
            </Badge>
              <Stack  className='ml-10' direction="row" spacing={2}>
                <Avatar  onClick={handleMenu}  alt="" src="/broken-image.jpg" />
                <Menu
                className='mt-10'
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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </Stack>
            </div>
      </header>
      <hr />
    </div>
  )
}

export default Navbar