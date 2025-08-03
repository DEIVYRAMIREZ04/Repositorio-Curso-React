import './App.css';
import Socialmedia from "./componentes/SocialMedia/SocialMedia";
import { NavBar, NavBar2 } from "./componentes/NavBar/NavBar";
import { ItemListWithSearch } from './componentes/itemList/ItemList';
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { CardProvider } from './Context/CardContext';
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout';
function App() {
  return (
    <BrowserRouter>
    <CardProvider>

      <div className='body'>

        <div className='cuerpo'>
          <div className='app-container' >
            <NavBar />
            <h2 className="encabezado">Luz Norelia Tu Asesora De Confianza</h2>
            <h3 className="campaña">Campaña # 10</h3>
          </div>
          <div >
            <NavBar2 />
          </div>
          <div >
            <Routes>
              <Route path="/" element={<ItemListWithSearch />} />
              <Route path="/category/:category" element={<ItemListContainer />} />
              <Route path="/detail/:productId" element={<ItemDetailContainer />} />
              <Route path="/cart" element = {<Cart />}/>
              <Route path="/checkout" element = {<Checkout/>}/>
            </Routes>
            <Socialmedia />
          </div>

        </div>
      </div>
    </CardProvider>
    </BrowserRouter>

  )
}

export default App
