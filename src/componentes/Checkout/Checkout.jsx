import { useState, useContext } from "react";
import { CardContext } from "../../Context/CardContext";
import FormCheckout from "../FormCheckout/FormCheckout";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db";
import ResumenCompra from "../Ticket/ticket";
import "./Checkout.css"
const Checkout = () => {
    const [dataForm, setDataForm]= useState({
        fullname : "",
        phone : "",
        email : ""

    });
    const [resumen, setResumen] = useState(null);
    const [orderId, setOrderId]=useState(null);
    const { cart,totalPrice }= useContext(CardContext)

    const handleChangeImput = (event) => {
        setDataForm( {...dataForm, [event.target.name] : event.target.value})
    };
    const sendOrder =  (event)=>{

        event.preventDefault();

        const order = {
            buyer : {...dataForm},
            products : [...cart],
            total : totalPrice()
        }
       upLoadOrder (order);
       

    }
    const upLoadOrder = async (order) => {
        try {
            const orderRef = collection (db, "orders");
            const response = await addDoc(orderRef, order);
            setOrderId(response.id);
            setResumen (order);
        } catch (error) {
           console.log ( "Error al cargar la orden")
        }

    }
  return (
    <div className="checkout">
        {
            orderId ? (
                <div>
                  < ResumenCompra orderId = {orderId} resumen = {resumen}/>
                </div>
            ) : (
                
                <FormCheckout dataForm={dataForm} handleChangeImput={handleChangeImput} sendOrder={sendOrder}/>  
            )
        }

    </div>
  )
}

export default Checkout;