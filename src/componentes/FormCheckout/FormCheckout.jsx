import "./FormCheckout.css"
import Swal from 'sweetalert2';

const FormCheckout = ({ dataForm, handleChangeImput, sendOrder }) => {
     const handleSubmit = (e) => {
    e.preventDefault();

    const { fullname, phone, email } = dataForm;

    if (!fullname.trim() || !phone.trim() || !email.trim()) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor completa todos los campos antes de continuar',
        confirmButtonColor: '#800080'
      });
      return;
    }

    sendOrder(e);
  };
    return (
        <form className="formcheckout" onSubmit={ handleSubmit}>
            <input
                className="place"
                placeholder="NOMBRE COMPLETO"
                type="text"
                name="fullname"
                value={dataForm.fullname}
                onChange={handleChangeImput}
            />
            <input
                className="place"
                placeholder="TELEPHONE"
                type="text"
                name="phone"
                value={dataForm.phone}
                onChange={handleChangeImput}
            />
            <input
                className="place"
                placeholder="E_MAIL"
                type="email"
                name="email"
                value={dataForm.email}
                onChange={handleChangeImput}
            />
            <button type="submit" className="boton-pedido">Pagar</button>

        </form>
    )
}

export default FormCheckout