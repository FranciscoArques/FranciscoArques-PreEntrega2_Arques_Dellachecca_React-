import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { PRODUCTS } from '../data/products';
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [products, setProducts] = useState([]);
    const {id} = useParams();

    useEffect( () => {
        getItems().then( response => {
            setProducts(response)
        })
    }, [id])

    const getItems = () => {
        return new Promise((resolve, reject) => {
            const item = PRODUCTS.find(p => p.id == id)
            setTimeout(() => {
                resolve(item)
            }, 2000);
        })
    }

    return (
        <div>
            <ItemDetail key={products.id} {...products}/>
        </div>
    )
}

export default ItemDetailContainer