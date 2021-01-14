import {createContext, useContext, useState} from "react"

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    const addProduct = (producto, cantidad) => {
        const existing = products.find((p) => p.id === producto.id)

        if(existing) {
            existing.cantidad += cantidad
            setProducts([...products])
        }else {
            setProducts([...products, {...producto, cantidad}])
        }
    };

    const productsCount = ()=> {
        return products.reduce((acc, p) => (acc += p.cantidad), 0)
    };

    const delProduct = (id)=> {
        products.splice(
            products.findIndex(p => p.id === id), 1
        )
        setProducts([...products])
    };

    const getGrandTotal = ()=> {
        return products.reduce((acc, p) => (acc += p.precio * p.cantidad), 0)
    };

    return (
        <CartContext.Provider value={{products, addProduct, delProduct, productsCount, getGrandTotal}}>
            {children} 
        </CartContext.Provider>
       
    );
};

export default useCartContext;

