import useProduct from "../../hoocks/useProduct.js";
import Loading from "../Loading/Loading";
import ItemDetail from "../ItemDetail/itemDetail"
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
  const { productId } =useParams();
  const { product, loading } = useProduct(productId);
    return (
    <div>
    {
      loading ? <Loading/> : <ItemDetail product={product}/>
    }
    </div>
  )
  
}

export default ItemDetailContainer;