import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../database/Database"
import ItemDetail from "../../componentes/itemDetail/ItemDetail"

const ItemDetailContainer = ()=> {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams ()
    console.log(producto)

    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            getProductById(Number(id)).then((response)=>{ 
                
                setProducto(response)
                setLoading(false)
            })
        }, 3000)
    }, [id])
    

    return (
        <div className="mt-5">
            {
                loading ? (<h1>Cargando...</h1>) : (<ItemDetail producto={producto}/>)
            }
        </div>
    )
}

export default ItemDetailContainer;