import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import "./cart.css"
import useCartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = ()=> {

    const{productsCount} = useCartContext();

    return (
        <Link to={"/cart"}>
            <FontAwesomeIcon icon={faShoppingCart} className='icono'/>
            <div>
                {
                    productsCount()
                }
            </div>
        </Link>
    )
}
export default Cart;
