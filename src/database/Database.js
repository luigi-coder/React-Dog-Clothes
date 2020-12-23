const productos = [
    {
        nombre:"producto 01",
        img:"https://http2.mlstatic.com/D_NQ_NP_804638-MLA44394331510_122020-O.webp",
        id: 1991,
        descripcion:"lorem xxxxxxxxxxxxxxxxxxx",
        precio: 29,
        stock: 50
    },
    {
        nombre:"producto 02",
        img:"https://http2.mlstatic.com/D_NQ_NP_804638-MLA44394331510_122020-O.webp",
        id: 1992,
        descripcion:"lorem xxxxxxxxxxxxxxxxxxx",
        precio: 29,
        stock: 51  
    },
    {
        nombre:"producto 03",
        img:"https://http2.mlstatic.com/D_NQ_NP_804638-MLA44394331510_122020-O.webp",
        id: 1993,
        descripcion:"lorem xxxxxxxxxxxxxxxxxxx",
        precio: 29,
        stock: 52
    }
]

export const getProducts = ()=> {
    return new Promise ((resolve) =>{
        resolve(productos)
    })
}

export const getProductById = (id)=> {
    return new Promise ((resolve) => {
        resolve(
            productos.find((producto) => producto.id == id)
        )
    })
}

