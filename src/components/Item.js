import React from 'react'
import ItemCount from './ItemCount'

const Item = ( {title, stock, price} ) => {
    return (
        <div className="card w-96 bg-light-coffee shadow-xl my-10">
            <figure className="px-10 pt-10">
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title"> {title} </h2>
                <p> ${price} </p>
            <div className="card-actions">
                <ItemCount stock = {stock} />
                <button className="btn btn-primary">Detalle</button>
            </div>
            </div>
        </div>

    )
}

export default Item
