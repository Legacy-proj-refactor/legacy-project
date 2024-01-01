"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface wishlist {
  // Define the structure of a wishlist item here
  name:string;
  newprice:number;
  lastprice:number;
  discription:string;
  size:string;
}

interface WishListProps {
  setWished: (wished: wishlist[]) => void;
}

 const wishlist: React.FC<WishListProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const response = await axios.get<wishlist[]>(`http://localhost:3000/api/product/getAll/${idp}`)
        props.setWished(response.data);
        setLoading(true)
      } catch (error) {
        console.error('Error fetching wishlist:');
      
      }
    };

    fetchAll();
  }, []);

//   const goToHome = () => {
//     router.push('/page.tsx'); // Use Next.js router for navigation
//   };

return (
    <h2> wishlist   </h2>
)
};

export default wishlist;