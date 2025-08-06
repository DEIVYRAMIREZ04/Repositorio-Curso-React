import useProduct from "../../hoocks/useProduct.js";
import Loading from "../Loading/Loading";
import ItemDetail from "../ItemDetail/itemDetail"
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Swal from 'sweetalert2';
const ItemDetailContainer = () => {
  const { productId } =useParams();
  const navigate = useNavigate();
  const { product, loading } = useProduct(productId);
  useEffect(() => {
      if (!loading && !product) {
      Swal.fire({
        icon: 'error',
        title: 'Producto no encontrado',
        text: 'El producto que buscas no existe o ha sido eliminado.',
        confirmButtonText: 'Volver al inicio'
      }).then(() => {
        navigate("/error"); 
      });
    }
  }, [loading, product, navigate]);

    return (
    <div>
    {
      loading ? <Loading/> : <ItemDetail product={product}/>
    }
    </div>
  )
  
}

export default ItemDetailContainer;