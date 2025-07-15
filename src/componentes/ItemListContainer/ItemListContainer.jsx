import useProducts2 from "../../hoocks/useProducts2.js";
import "./ItemListContainer.css";
import  ItemList2 from "../ItemList2/ItemList2";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";
const ItemListContainer = () => {
  const { category } = useParams();
  const { products, loading } = useProducts2(category);
  ;
  
  return (
    <div >

      {
        loading ? <div> <Loading className="loader" /></div> : <ItemList2 products={products} />
      }
    </div>


  )
}

export default ItemListContainer;