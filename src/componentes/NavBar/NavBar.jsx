import "./NavBar.css";
import logoNatura from "../../assets/natura-trans.png";
import CarWidget from "../carWidget/CarWidget";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logoNatura} alt="logo" className="logo" />
      </Link>

      <ul className="listanavbar">
        <li className="list-N">
          <Link to="/category/oferta-mes">
            OFERTA DEL MES
          </Link>
        </li>
        
      </ul>

      <CarWidget />
    </div>
  )
};
const NavBar2 = () => {
  return (
    <ul className='nav2'>
      <li className="cate">
        <Link to="/category/cabello">
          CABELLO
        </Link>
      </li>
      <li className="cate">
        <Link to="/category/cremas">
          CREMAS
        </Link>
      </li>
      <li className="cate">
        <Link to="/category/perfumes">
          PERFUMES
        </Link>
      </li>
    </ul>
  )
}

export { NavBar, NavBar2 };