import { Link } from "react-router-dom";

const Error404 = () => {
  return (
   <div style={{ textAlign: "center", padding: "2rem" }}>
    <h2>Producto no encontrado</h2>
    <p>Este producto no existe o fue eliminado del catálogo.</p>
    <Link to={"/"}>
     <p>Volver al inicio</p>
    </Link>
  </div>
);
}

export default Error404;