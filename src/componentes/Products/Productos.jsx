import "./productos.css";

const Productos = (props) => {
  return (
    <div>
        <h1 className="titulo">{props.titulo}</h1>
        <div className="cremas">
            
            <img src={props.cremas} alt="" />
            <ul >
                <li>{props.nombre}</li>
                <li> {props.base}</li>
                <li> {props.precio}</li>
            </ul>
            <button className="boton">Agregar Al Carrito</button>
        </div>
    </div>
  )
}

export default Productos