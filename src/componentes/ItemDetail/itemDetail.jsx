import "./ItemDetail.css"
import { Link } from "react-router-dom";
import ItemCount from "../Itemcount/ItemCount";
import { useContext } from "react";
import { CardContext } from "../../Context/CardContext";
const ItemDetail = ({product = {}}) => {
  const {addProductInCart} = useContext(CardContext);

  const addProduct = (quantity)=>{
    const elementCart = { ...product, quantity }
    addProductInCart(elementCart);
    
//en q parte quantity  se convierte en una propiedad de la data
  }
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