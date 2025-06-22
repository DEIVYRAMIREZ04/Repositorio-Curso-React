import "./ItemListContainer.css";
const ItemListContainer = (props) => {
  return (
    <div>
        <h2 className="encabezado">{props.saludo}</h2>
        <h3 className="campaña">Campaña {props.numero}</h3>
    </div>
  )
}

export default ItemListContainer