import './App.css';
import NavBar from "./componentes/NavBar.jsx";
import ItemListContainer from './componentes/ItemListContainer.jsx';
import Productos from "./componentes/Productos.jsx";
import Cremas from "./assets/cremas.png";
import Perfumes from "./assets/perfumes.png";
import Piel from "./assets/piel.png";

function App() {
  const saludo = "Hola Mundo";
  return (
    <div className='body'>
      <div className='app-container'>
        <NavBar/>
      <ItemListContainer saludo={"Luz Norelia Suarez Tu Asesora Experta"} numero={10}/>
      </div>
      <Productos titulo={" CUIDADO E HIDRATACION DE LA PIEL"} cremas={Cremas} nombre={"CREMAS"} 
      base={"MANZANA / MARACUYA / PATAHUA"} precio={"$20.000 c/u"}/>
      <Productos titulo={" DESPIERTA TUS SENTIDOS CON OLORES FANTASTICOS"} cremas={Perfumes} nombre={"PERFUMERIA"} 
      base={"HUMOR / KAYAC / PITANGA"} precio={"$80.000 c/u"}/>
      <Productos titulo={" QUE EL PASO DEL TIEMPO NO SE REFLEJE EN TI"} cremas={Piel} nombre={"MASCARILLAS"} 
      base={"EXFOLIANTES / ANTIARRUGAS / ANTIMANCHAS"} precio={"$55.000 c/u"}/>
    </div>
  )
}

export default App
