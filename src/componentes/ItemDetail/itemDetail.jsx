import "./ItemDetail.css"
import { Link } from "react-router-dom";
import ItemCount from "../Itemcount/ItemCount";
import { useContext } from "react";
import { CardContext } from "../../Context/CardContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; 
const ItemDetail = ({product = {}}) => {
  const {addProductInCart} = useContext(CardContext);
  const navigate = useNavigate();

  const addProduct = (quantity)=>{
    const elementCart = { ...product, quantity }
    addProductInCart(elementCart);
    Swal.fire({
      icon: "success",
      title: "Producto agregado",
      text: "¡Agregado correctamente al carrito!",
      confirmButtonColor: "#800080",
      confirmButtonText: "Aceptar",
    }).then(() => {
      navigate("/"); 
    });
  };
  
  return (
    <div className="containerDetail">
      <div className="imgDetailContainer">
        <img  src={product.img} alt="producto" />
      </div>
      <div className="textDetail">
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>{product.size}</p>
        <p>${product.price}</p>
        <p>{product.note}</p>
        < ItemCount stock = {product.stock} addProduct={addProduct}/>
        <Link  to="/">
        <p>REGRESAR</p>
        </Link>
      </div>
    </div>
  )
}

export default ItemDetail;