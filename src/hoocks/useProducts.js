import {useEffect, useState} from 'react'
import { getProducts }from "../Data/products";

const useProducts = () => { 
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);
   useEffect(()=>{
    getProducts()
    .then((data) => {
        setProducts(data);
    })
    .finally(()=>{
        setLoading(false)
    })
   },[]);
  return { products, loading };
};


export default useProducts