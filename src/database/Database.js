const productos = [
    {
        nombre:"producto 01",
        img:"../img/imagen01.png",
        id: 1991,
        descripcion:"lorem xxxxxxxxxxxxxxxxxxx",
        precio: 29,
        stock: 50
    },
    {
        nombre:"producto 02",
        img:"../img/imagen01.png",
        id: 1992,
        descripcion:"lorem xxxxxxxxxxxxxxxxxxx",
        precio: 29,
        stock: 51  
    },
    {
        nombre:"producto 03",
        img:"../img/imagen01.png",
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

