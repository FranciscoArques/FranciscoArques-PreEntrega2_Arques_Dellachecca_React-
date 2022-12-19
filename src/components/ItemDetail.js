import ItemCount from './ItemCount'

const ItemDetail = ( {id, title, stock, price, pictureURL, description} ) => {
    return (
        <div className='flex place-content-center'>
        <div className="card w-96 bg-light-coffee shadow-xl my-10">
            <figure className="px-10 pt-10">
                <img src={pictureURL} alt={id} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title"> {title} </h2>
                <p> ${price} </p>
            <div>
                <p>{description}</p>
                <p>Stock disponible: {stock}</p>
            </div>
            <div className="card-actions flex flex-col items-center">
                <ItemCount stock = {stock} />
                <button className="btn btn-primary">Agregar al Carrito</button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default ItemDetail
