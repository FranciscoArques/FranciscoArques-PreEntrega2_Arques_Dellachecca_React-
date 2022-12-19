import producto1 from './img/producto1.webp'
import producto2 from './img/producto2.webp'
import producto3 from './img/producto3.webp'
import producto4 from './img/producto4.webp'

export const PRODUCTS = [
    { 
        id: 1, 
        title:"Café Molido Tipo Italiano 500g", 
        stock: 7, 
        category: 'oferta',
        price: 5800, 
        pictureURL: producto1, 
        description:"Variedad de café molido Italiano de Café Martínez. Pack reforzado especialmente para conservar el café de 500g. Recomendado para cafeteras de filtro." 
    },
    
    { 
        id: 2, 
        title:"Café Molido Brasil Mediano 500g", 
        stock: 5, 
        category: "normal",
        price: 6300, 
        pictureURL: producto2, 
        description:"Variedad de café molido Brasil de Café Martínez. Pack reforzado especialmente para conservar el café de 500g. Recomendado para cafeteras de filtro." 
    },
    
    { 
        id: 3, 
        title:"Café Molido Colombia 250g", 
        stock: 9,
        category: "oferta",
        price: 3400, 
        pictureURL: producto3, 
        description:"Variedad de café molido Colombia de Café Martínez. Pack reforzado especialmente para conservar el café de 250g. Recomendado para cafeteras de filtro." 
    },
    
    { 
        id: 4, 
        title:"Café Molido Moka Frutado 500g", 
        stock: 3, 
        category: 'normal',
        price: 1300, 
        pictureURL: producto4, 
        description:"Variedad de café molido Moka Frutado de Café Martínez. Pack reforzado especialmente para conservar el café de 500g. Recomendado para cafeteras de filtro." 
    },
]