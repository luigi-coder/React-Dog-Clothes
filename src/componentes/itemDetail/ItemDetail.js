import React, { useState } from "react"
import ItemCount from "../itemcount/ItemCount"

const ItemDetail = ({producto})=> {
    const [cantidad, setCantidad] = useState(1)
    const onAddItem = (contador)=> {
        setCantidad (contador)
    }
    console.log(producto)
    return (
        <>
            <div>
                <div>
                    <img src={producto.img}></img>
                </div>
                <div>
                    <h3>{producto.nombre}</h3>
                    <h3>{producto.descripcion}</h3>
                    <h3>{producto.precio}</h3>
                    <h3>{producto.stock}</h3>
                    <ItemCount 
                    initialValue={1}
                    stock={producto.stock}
                    onAdd={onAddItem}/>
                </div>
                
            </div>
        </>
    )
}
export default ItemDetail;

