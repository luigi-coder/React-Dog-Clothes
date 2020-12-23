import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

import "./cart.css"

const Icons = ()=> {
    return (
        <div>
            <FontAwesomeIcon icon={faShoppingCart} className='icono'/>
        </div>
    )
}
export default Icons;
