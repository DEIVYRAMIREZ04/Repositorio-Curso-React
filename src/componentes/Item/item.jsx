import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ product }) => {
  return (
    <li className="item-card">

      <div className="contain-img">
        <img className="img-item" src={product.img} alt="producto" />
      </div>
      <div className="item-info">
        <h3 className="item-name">{product.name}</h3>
        <p className="item-price">${product.price}</p>
        <Link to={`/detail/${product.id}`}>
          <button className="info-button">INFORMACION</button>
        </Link>

      </div>
    </li>
  );
};

export default Item;
