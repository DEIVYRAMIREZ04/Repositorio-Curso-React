import "./CarWidget.css";
import carrito from '../assets/carrito2.png'
const CarWidget = () => {
  return (
    <div >
        <img className='carrito'  src={carrito}  alt="carrito de compras" />
    </div>
  )
};

export default CarWidget;