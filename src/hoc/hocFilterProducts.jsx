import  { useState } from "react";
import useProducts from "../hoocks/useProducts.js";
import Loading from "../componentes/Loading/Loading.jsx";
import "./hocFilterProducts.css"
const hocFilterProducts = (Component) => {

  return function() {
    
    const [query, setQuery] = useState("");
    const { products, loading } = useProducts();

    const changeInput = (event) => {
      setQuery( event.target.value.toLowerCase() );
    };

    const search = (productsList) => {
      const filterProducts = productsList.filter((product)=> {
        return product.name.toLowerCase().includes(query);
      });

      return filterProducts;
    }


    return(
      <>
      
        <div >
          <input type="text" placeholder="buscar producto..." onChange={changeInput} className="place"/>
        </div>
         
        <div >
        {loading ? ( <Loading className="loader"/>) :(<Component products={search(products)} />)}
        </div>
        
      </>
    )
  }

}

export default hocFilterProducts;