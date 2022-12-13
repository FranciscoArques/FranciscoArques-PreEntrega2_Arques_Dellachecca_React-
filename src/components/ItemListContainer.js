import Item from './Item'
import React, { useEffect, useState } from 'react'

const PRODUCTS = [
    { id: 1, title:"Café Molido Tipo Italiano 500g", stock: 7, price: 5800, pictureURL:"", description:"Variedad de café molido Italiano de Café Martínez. Pack reforzado especialmente para conservar el café de 500g. Recomendado para cafeteras de filtro." },
    { id: 2, title:"Café Molido Brasil Mediano 500g", stock: 5, price: 6300, pictureURL:"", description:"Variedad de café molido Brasil de Café Martínez. Pack reforzado especialmente para conservar el café de 500g. Recomendado para cafeteras de filtro." },
    { id: 3, title:"Café Molido Colombia 250g", stock: 9, price: 3400, pictureURL:"", description:"Variedad de café molido Colombia de Café Martínez. Pack reforzado especialmente para conservar el café de 250g. Recomendado para cafeteras de filtro." },
    { id: 4, title:"Café Molido Moka Frutado 500g", stock: 3, price: 1300, pictureURL:"", description:"Variedad de café molido Moka Frutado de Café Martínez. Pack reforzado especialmente para conservar el café de 500g. Recomendado para cafeteras de filtro." },

]

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        getProducts().then( response => {
            setProducts(response)
        })
    }, [])

    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve( PRODUCTS )
            }, 2000);
        })
    }

    return (
        <div>
            <h1 className="text-[40px] normal-case font-bold">Descubre Nuestra Selección...</h1>
            { products.map( p => <Item key={p.id} {...p}/>)}
        </div>
    )
}

export default ItemListContainer
