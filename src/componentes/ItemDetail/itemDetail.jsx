import "./ItemDetail.css"
import { Link } from "react-router-dom";
const ItemDetail = ({product = {}}) => {
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
        <Link  to="/">
        <p>REGRESAR</p>
        </Link>
      </div>
    </div>
  )
}

export default ItemDetail;