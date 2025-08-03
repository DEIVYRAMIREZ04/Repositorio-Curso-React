import { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ({ stock, addProduct }) => {
    const [count, setcount] = useState(1);

    const handleClickReduece = () => {
        if (count > 1) {
            setcount(count - 1)
        }
    };
    const handleClickIncrement = () => {
        if (count < stock) {
            setcount(count + 1)
        }
    }
    return (
        <div className='itemcount'>
            <div className='count'>
                <button onClick={handleClickReduece}>-</button>
                <p >{count}</p>
                <button onClick={handleClickIncrement}>+</button>
            </div>
            <div className = "place">
                <button className = "buton" onClick={() => addProduct(count)}>Añadir al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;