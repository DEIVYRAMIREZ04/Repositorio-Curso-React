import "./NavBar.css";
import logoNatura from "../../assets/logonaranja.png";
import CarWidget from "../CarWidget/CarWidget";
const NavBar = () => {
  return (
    <div className="navbar">
        <img src={logoNatura} alt="logo" className="logo"/>
   
    <ul className="listanavbar">
      <li>OFERTA DEL MES</li>
      <li>ASESORIA PERSONALIZADA</li>
      <li>QUIERES SER ASESORA</li>
    </ul>
    <CarWidget/>
     </div>
  )
};

export default NavBar;