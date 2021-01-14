import { React, useState } from "react"
import './itemcount.css'

const ItemCount = ({initialValue, stock, onAdd})=> {

    const [contador, setContador] = useState(initialValue)

    const aumentarContador = () => {
       
        if(contador >= initialValue && contador < stock) {
            return setContador(contador +1), onAdd(contador + 1)
        }else if (contador === stock) {
            console.log(stock)
        }
    }
    const disminuirContador = () => {
        if(contador > initialValue) {
            return setContador(contador-1), onAdd (contador - 1)
        }else if(contador <= initialValue) {
            console.log(initialValue)
        }
    }
    /* const resetearContador = () => {
        setContador(initialValue);
    } */
    

    return (
        <div>
            <h3 class="text-cyan" style={{textAlign:'center'}}>Cantidad: {contador}</h3>
            <div className="container text-center mt-5">
                <button className="btn btn-info mr-2" onClick={aumentarContador}>+</button>
                {/* <button className="bg-success" onClick={resetearContador}>Resetear Contador</button> */}
                <button className="btn btn-info mr-2" onClick={disminuirContador}>-</button>
            </div>
        </div>
    )
}

export default ItemCount;



