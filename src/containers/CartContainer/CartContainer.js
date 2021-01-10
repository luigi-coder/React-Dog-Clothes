import Button from "../../componentes/button/Button"
import CartList from "../../componentes/CartList/CartList"
import useCartContext from "../../context/CartContext"

const CartContainer = ()=> {
    const {products} = useCartContext();

    return(
        <div>
            <h1>Carrito</h1>
            {
                products.length === 0 ? (
                    <div>
                        <h3>Actualmente no tenes productos en el carrito</h3>
                        <Button 
                        path="/"
                        contenido="Volver a comprar"/>
                    </div>
                ) : (
                    <div>
                        <CartList
                        products={products}
                        />
                    </div>
                )
            }
        </div>
    )
}

export default CartContainer;