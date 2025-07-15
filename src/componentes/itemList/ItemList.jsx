import Item from "../item/item"
import hocFilterProducts from "../../hoc/hocFilterProducts";
import "./ItemList.css";
import useProducts from "../../hoocks/useProduct";

const ItemList = ({ products = [] }) => {
  
  const {product, loading}=useProducts();
  
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

const ItemListWithSearch = hocFilterProducts(ItemList);

export { ItemList, ItemListWithSearch };