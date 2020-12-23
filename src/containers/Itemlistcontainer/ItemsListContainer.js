import ItemList from "../../componentes/itemlist/Itemlist"
import { useState, useEffect } from "react"
import { getProducts } from "../../database/Database"

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            getProducts().then(
                (response) => {
                    setItems(response)
                    setLoading(false)
                }
            )
        }, 3000)
    }, [])
    return (
        <>
        {
            loading ? (<h1>Cargando...</h1>) : (<ItemList items={items} />)
        }
        </>
    )
}
export default ItemListContainer;
