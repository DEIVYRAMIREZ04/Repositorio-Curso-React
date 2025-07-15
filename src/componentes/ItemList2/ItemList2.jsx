import Item from "../item/item"
import "./ItemList2.css";
import useProducts2 from "../../hoocks/useProduct";

const ItemList2 = ({ products = [] }) => {
  
  const {product, loading}=useProducts2();
  
    return (
    <ul className="item-list">
      {
        products.map((product) => (
          <Item product={product} key={product.id} />
        ))
      }
    </ul>
  )
}
export default ItemList2;
