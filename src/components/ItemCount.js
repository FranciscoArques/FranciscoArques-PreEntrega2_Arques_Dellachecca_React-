import React, { useState } from 'react'

const ItemCount = ( {stock}) => {

    const [count, setCount] = useState(0);

    const itemToCart = () => {
        setCount(count + 1)
    }

    const itemOffCart = () => {
        setCount(count - 1)
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center'>
                <strong>Cantidad a Comprar:</strong>
                <strong> {count} </strong>
                <div className='flex gap-2'>
                    <button disabled= {count === 0} onClick= {itemOffCart} className="btn">-</button>
                    <button disabled= {count === stock} onClick= {itemToCart} className="btn">+</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount
