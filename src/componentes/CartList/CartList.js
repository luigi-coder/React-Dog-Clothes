import useCartContext from "../../context/CartContext"
import Button from "../button/Button";
import "./CartList.css"
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CartList = ()=> {
    const {products, delProduct, getGrandTotal} = useCartContext();

    const handleDel =(p) => {
        delProduct(p.id)
    }

    return (
        <>
        <Button
        contenido={`Seguir Comprando`}
        path={"/"}/>
            <div id="cart">
                <div id="cartTitles">
                    <h4>borrar</h4>
                    <h4>producto</h4>
                    <h4>Cantidad</h4>
                    <h4>precio</h4>
                </div>
                {products.map((product)=>(
                        <div id="cartProducts" key={product.id}>
                             <FontAwesomeIcon icon={faTrash} id={'iconTrash'} onClick={() => handleDel(product)} />
                             <h4>{product.nombre}</h4>
                             <h4>{product.cantidad}</h4>
                             <h4>${product.precio}</h4>
                        </div>
                ))
                }
                <div id="cartTotal">
                    <h4>Subtotal</h4>
                    <h4>${getGrandTotal()}</h4>
                    <Button contenido = {"Checkout"}
                    path = {"/checkout"}/>
                </div>
            </div>
        </>
    )
}
export default CartList;