import {useEffect, useState} from 'react'
import { getProducts }from "../Data/products";



const useProducts2 = (category) => { 
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);
   useEffect(()=>{
    setLoading(true)
    getProducts()
    .then((data) => {
        if(category){
            const productFilter= data.filter((product)=>product.category===category)
            setProducts(productFilter)
        }else{
        setProducts(data);
        }
    })
    .finally(()=>{
        setLoading(false)
    })
   },[category]);
  return { products, loading };
};


export default useProducts2;