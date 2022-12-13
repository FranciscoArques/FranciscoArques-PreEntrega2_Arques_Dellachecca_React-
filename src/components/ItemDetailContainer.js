import React, { useEffect, useState } from 'react'

const ItemDetailContainer = () => {

    const [items, setItems] = useState([]);

    useEffect( () => {
        getItems().then( response => {
            setItems(response)
        })
    }, [])

    const getItems = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve( ITEMS )
            }, 2000);
        })
    }

    return (
        <div>
            
        </div>
    )
}

export default ItemDetailContainer