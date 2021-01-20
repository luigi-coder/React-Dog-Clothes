import React from 'react'
import {Link} from 'react-router-dom'

const Button = ({contenido, path, callback})=> {
    return(
        <Link to={path}>
            <button id="button" onClick={callback}>{contenido}</button>
        </Link>
    )
}
export default Button;