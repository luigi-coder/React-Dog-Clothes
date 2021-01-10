import React, { useState } from "react"
import ItemCount from "../itemcount/ItemCount"
import Button from "../button/Button"
import useCartContext from "../../context/CartContext"


const ItemDetail = ({producto})=> {
    const [cantidad, setCantidad] = useState(1)
    const {addProduct} = useCartContext();
    const onAddItem = (contador)=> {
        setCantidad (contador)
    }
    const addToCart = ()=> {
        addProduct(producto, cantidad)
    }
    return (
        <>
            <div>
                <div>
                    <img src={producto.img} alt="imagen de bici"></img>
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
                <Button 
                contenido={"Comprar"}
                callback={addToCart}/>
            </div>
        </>
    )
}
export default ItemDetail;

