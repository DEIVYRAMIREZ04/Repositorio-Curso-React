import { createContext, useState } from "react";

const CardContext = createContext();

const CardProvider = ({ children }) => {
    const [cart, setcart] = useState([]);

    const addProductInCart = (product) => {
        const existingProduct = cart.find(moreProduct=>moreProduct.id === product.id)
        if(existingProduct){
            const upDateCart = cart.map(pId=>pId.id===product.id
            ? { ...pId, quantity:pId.quantity+product.quantity} : pId
        )
        setcart(upDateCart);
        }else{
            setcart([...cart, product])
        }
    }

    const totalQuantity = ()=> {
        const total = cart.reduce((total, product)=>total + product.quantity, 0);
        return total;
    }
    const totalPrice= ()=> {
        const total = cart.reduce((total, product)=>total + (product.price * product.quantity), 0);
        return total;
    }

    const deleteProductById = (id) =>{
       const productFilter = cart.filter((product)=>product.id !== id)
       setcart (productFilter);
    }
    const clearCart = ()=>{
        setcart([]);
    }

    

    return (
        <CardContext.Provider value={{ cart, addProductInCart, totalQuantity, totalPrice, deleteProductById, clearCart }}>
            {children}
        </CardContext.Provider>
    )

};
export { CardContext, CardProvider };