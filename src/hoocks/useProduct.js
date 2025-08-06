import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "../db/db.js";

const useProduct = (productId) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
const getporoduct =async () => {
    try {
       const docRef = doc(db, "products", productId); 
       const dataDb = await getDoc(docRef);
        if (dataDb.exists()){
            const data = {id: dataDb.id, ...dataDb.data()};
            setProduct(data)
        }else{
            setProduct(null)
        }
       
    } catch (error) {
       console.log(error) 
    }
    finally{
        setLoading(false)
    }
}

    useEffect(() => {
       getporoduct();
    }, [])
return {product, loading}

};

export default useProduct;