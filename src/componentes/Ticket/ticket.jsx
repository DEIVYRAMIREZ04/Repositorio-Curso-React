import { useState, useContext, useEffect } from "react";
import { CardContext } from "../../Context/CardContext";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const ResumenCompra = ({ orderId, resumen }) => {
  const navigate = useNavigate();
  const { clearCart } = useContext(CardContext)
  useEffect(() => {
    const { buyer, products, total } = resumen;
    const resumenHTML = `
  <div style="text-align: left; font-family: sans-serif;">
  <p><strong>
  Conserva este codigo ID 
  para rastrear tu pedido 
  </strong></p>
    <p><strong>Orden ID:</strong> ${orderId}</p>
     <ul style="list-style: none; padding-left: 0; margin: 0;">
      <li><strong>Nombre:</strong> ${buyer.fullname}</li>
      <li><strong>Teléfono:</strong> ${buyer.phone}</li>
      <li><strong>Email:</strong> ${buyer.email}</li>
    </ul>
    <p><strong>Productos:</strong></p>
    <ul style="padding-left: 1em; margin: 0; line-height: 1.5;">
      ${products.map(prod => `<li>${prod.name} x${prod.quantity} - $${prod.price * prod.quantity}</li>`)
        .join('')}
    </ul>
    <p><strong>Total:</strong> $${total}</p>
    <p><strong>!GRACIAS POR TU COMPRA</p>

  </div>
`;


    Swal.fire({
      title: 'Resumen de compra',
      icon: 'success',
      html: `<pre style="text-align:left;">${resumenHTML}</pre>`,
      confirmButtonText: 'Aceptar',
      customClass: {
        popup: 'resumen-popup',
      },
    }).then(() => {
      clearCart();
      navigate('/');
    });

  }, []);

  return (
    null
  );
};

export default ResumenCompra;