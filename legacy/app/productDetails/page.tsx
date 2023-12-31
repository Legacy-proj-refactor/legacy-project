"use client"
import React , {useState , useEffect} from 'react';
import axios from 'axios';

import Favorite from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { Rating, TextField, InputAdornment, IconButton, Box } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Link from "next/link";




interface Result {
  idp:number;
  name: string;
  image: string;
  newprice: number;
  lastprice: number;
  discription: string;
  size: string;
};



const OneProduct: React.FC = () => {
    const [product, setProduct] = useState<Result[]>([]);
    const [isloading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    





 const handleAddToCart = async (event: React.FormEvent) => {
  event.preventDefault(); // Prevent default form submission behavior

  try {
    const productToAdd = {
      // id: product.length > 0 ? product[0].idp : "",
      name: product.length > 0 ? product[0].name : "",
      image: product.length > 0 && product[0].image ? product[0].image : "",
     price: product.length > 0 && product[0].lastprice ? product[0].lastprice : "",
    };

    // Make a POST request to the API endpoint
    const response = await axios.post("http://127.0.0.7:3000/api/product/addC", productToAdd);

    // Handle the response if needed
    console.log("Product added to cart:", response.data);
  } catch (error) {
    console.error("Error adding product to cart:", error);
  }
};
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch("http://127.0.0.1:3000/api/Oneproduct/getOne/1");
          console.log("res", res);
          const responseData: Result[0] = await res.json();
          console.log(responseData);
          setProduct(responseData);
          
          
        } catch (error) {
          console.error("Error fetching data:", error);
          setError("Error fetching data. Please try again later.");
        } finally {
          setIsLoading(false); // Always set loading state to false
        }
      };
      fetchData();
    }, []);
  
    // console.log(product[0].image[0]);
  
    return (
      <div>
        <div className="flex font-sans">
          <div className="grid gap-3 w-85 h-70 p-2 m-4 text-sm scale-90">
            <div>
          
                <img
                  className="max-h-full max-w-full rounded-lg"
                  src={product.length > 0 && product[0].image ? product[0].image[0] : ""}
                  alt={product.length > 0 ? product[0].name : ""}
            
                />
          
            </div>
    {/* <div className="grid grid-cols-4 gap-3 ">
    
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
        </div> */}
      
        </div>
  {/* <div className="flex-none w-48 relative">
    <img src="/classNameic-utility-jacket.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
  </div> */}
  <form className="flex-auto p-6 mx-auto mt-16 h-20 ">
    <div className="flex flex-wrap ">
      <h1 className="flex-auto text-5xl  font-semibold text-slate-900 ml-[10px]">
      name: {product.length > 0 ? product[0].name : ""}
      
      </h1>
    

<div className="flex items-center w-full flex-none text-sm font-medium text-slate-700 mt-2 ml-[10px]  ">
    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">4.95</p>
    <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
    <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
</div>
<div className="w-full flex-none text-sm font-medium text-slate-700 mt-2 ml-[10px] text-2xl">
      newprice: {product.length > 0 ? product[0].newprice : ""}

      </div>
      
      <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2 ml-[10px] text-3xl">
      lastprice: {product.length > 0 ? product[0].lastprice : ""}
 
      </div>
      <p className=" text-sm text-slate-700 ml-[10px] text-xl">
      discription: {product.length > 0 ? product[0].discription : ""}
     
    </p>


    </div>
    <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200 ml-[10px] ">
      <div className="space-x-2 flex text-sm">
        <p className='text-3xl'>
        size: {product.length > 0 ? product[0].size : ""}
        </p>
        {/* <button > 
          <input className="sr-only peer" name="size" type="radio" value="xs" checked />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-red-500 peer-checked:text-white text-1xl">
            XS
          </div>
        </button>
        <button >
          <input className="sr-only peer" name="size" type="radio" value="s" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white text-1xl">
            S
          </div>
        </button>
        <button >
          <input className="sr-only peer" name="size" type="radio" value="m" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white text-1xl ">
            M
          </div>
        </button>
        <p></p>
        <button > 
          <input className="sr-only peer" name="size" type="radio" value="l" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white text-1xl ">
            L
          </div>
        </button>
        <button>
          <input className="sr-only peer" name="size" type="radio" value="xl"/>
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white text-1xl ">
            XL
          </div>
        
        </button> */}
      </div>
    </div>


    <div className="flex space-x-4 mb-6 text-sm font-medium ml-[10px] ">
      <div className="flex-auto flex space-x-4">
        
        <button className="h-10 px-6 font-semibold rounded-md bg-red-500 text-white text-2xl" type="submit" onClick={(event) => handleAddToCart(event)}>
        <Link href="/cart"> Buy now</Link> 
        </button>
       
        <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 text-2xl " type="button">
           Bag
        </button>
      </div>
      <div className="productQuantity">
                <div className='q'>
              <TextField
                label="Quantity"
                type="number"
                // width="15px"
                // value={}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        // onClick={() => handleQuantityChange(-1)}
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
                        //onClick={() => handleQuantityChange(1)}
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
              </div>
            <div className="q">
            <Checkbox  icon={<FavoriteBorder color="error"/>} 
            // onClick={()=>{HandleFav({product_idp:one.idp,users_idu:id})}} 
            checkedIcon={<Favorite color="error"/>  } />
            </div>
    </div>
  </form>
  <div className="flex flex-col mt-20 ">
  {/* <div className="overflow-x-auto sm:-mx-6 lg:-mx-8   "> */}
  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 mt-80 ">
      <div className="overflow-hidden">
        <table
          className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
 
          <tbody>
            <tr className="border-b dark:border-neutral-500 ">
              <td
                className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 ">
                Mark
              </td>
 
            </tr>
            <tr className="border-b dark:border-neutral-500 ">

              <td
                className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 ">
                Jacob
              </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


</div>


    )
}


export default OneProduct;