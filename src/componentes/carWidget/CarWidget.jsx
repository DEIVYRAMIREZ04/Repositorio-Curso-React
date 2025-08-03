import "./CarWidget.css";
import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import { CardContext } from "../../Context/CardContext";
import { Link } from "react-router-dom";

const CarWidget = () => {

  const { totalQuantity } = useContext(CardContext);

  return (
    <Link to = "/cart" className="cartcontainer">
      <TiShoppingCart  className="carrito"/>
      <p className="num">{totalQuantity()}</p>
    </Link>
  );
};

export default CarWidget;