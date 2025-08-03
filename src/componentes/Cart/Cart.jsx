import { useContext, useEffect } from "react";
import { CardContext } from "../../Context/CardContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
const Cart = () => {
    const { cart, totalPrice, deleteProductById, clearCart } = useContext(CardContext)
    const navigate = useNavigate();
    const handleEmptyCart = () => {
        if (cart.length === 0) {
            Swal.fire({
                icon: 'info',
                title: 'Tu carrito está vacío',
                text: 'Agrega productos para continuar tu compra',
                confirmButtonColor: '#800080'
            }).then(() => {
            navigate('/');
        });
        } else {
            navigate("/checkout");
        }
    };

    return (
        <div >
            {
                cart.map((ProductCart) => (
                    <div className="productcard">
                        <img src={ProductCart.img} alt="producto" className="imgcart" />
                        <p>{ProductCart.name}</p>
                        <p>c/u ${ProductCart.price}</p>
                        <p>Cantidad: {ProductCart.quantity} Unidades</p>
                        <p>Valor: ${ProductCart.price * ProductCart.quantity}</p>
                        <button className="buton3" onClick={() => deleteProductById(ProductCart.id)}>ELIMINAR</button>
                    </div>
                ))
            }
            <p>Precio total de tu compra: ${totalPrice()} </p>
            <div className="buttons">
                <button className="buton2" onClick={clearCart}>VACIAR CARRITO</button>
                <button className="buton2" onClick={handleEmptyCart}>ENVIAR ORDEN</button>
            </div>
        </div>
    );
};

export default Cart;