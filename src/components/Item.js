import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const Item = ( {id, title, stock, price, pictureURL} ) => {
    return (
        <div className='flex place-content-center'>
        <div className="card w-96 bg-light-coffee shadow-xl my-10">
            <figure className="px-10 pt-10">
                <img src={pictureURL} alt={id} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title"> {title} </h2>
                <p> ${price} </p>
            <div className="card-actions flex flex-col items-center">
                <ItemCount stock = {stock} />
                <Link to={`/item/${id}`} className="btn btn-primary">Detalle</Link>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Item
