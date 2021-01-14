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
            <div class="row">
                <div class="text-center col-md-6 mt-5">
                    <img src={producto.img} alt="imagen de un perro vestido"></img>
                </div>
                <div class="text-center col-md-6 mt-5">
                    <h3>{producto.nombre}</h3>
                    <h3>{producto.descripcion}</h3>
                    <h3>{producto.precio}</h3>
                    <h3>{producto.stock}</h3>
                    <ItemCount 
                    initialValue={1}
                    stock={producto.stock}
                    onAdd={onAddItem}/>
                    <div class="mt-5">
                        <Button
                        contenido={"Comprar"}
                        callback={addToCart}/>
                        <Button
                        contenido={`Seguir Comprando`}
                        path={"/"}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemDetail;

