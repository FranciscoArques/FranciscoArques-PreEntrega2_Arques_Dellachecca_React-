import Item from './Item'
import React, { useEffect, useState } from 'react'
import { PRODUCTS } from "../data/products";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const {idCategory} = useParams;

    useEffect(() => {

        getProducts().then(response =>{
            if(idCategory){
                setProducts(response.filter((product) => product.category === idCategory))
            }else{
                setProducts(response)
            }
        })

    }, [idCategory])

    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve( PRODUCTS )
            }, 2000);
        })
    }

    return (
        <div>
            <h1 className="text-[40px] normal-case font-bold flex justify-center">Descubre Nuestra Selección...</h1>
            { products.map( p => <Item key={p.id} {...p}/>)}
        </div>
    )
}

export default ItemListContainer
