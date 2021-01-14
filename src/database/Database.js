const productos = [
    {
        nombre:"Dog Underwear",
        categorias:"ropa",
        img:"https://i.ibb.co/nnmbVF3/dogunderwear.jpg",
        id: 1991,
        descripcion:"Ropa interior comoda y abrigada, sirve como una capa inferior para otras capaz de ropa externa mas rigidas.",
        precio: 29,
        stock: 50
    },
    {
        nombre:"Cross Collection",
        categorias:"ropa",
        img:"https://i.ibb.co/GkKSCcW/crosstown.jpg",
        id: 1992,
        descripcion:"Ropa para perros con un estilo urbano. Pero con algo no tan abrigado , consulta Wear Crosstown Collection.",
        precio: 29,
        stock: 51  
    },
    {
        nombre:"Leisure Collection",
        categorias:"ropa",
        img:"https://i.ibb.co/tZPv79q/leisure.jpg",
        id: 1993,
        descripcion:"Para pasear, dormir y tam,bien para caminar en los días frios: la variedad Leisure collection es realmente amplia.",
        precio: 29,
        stock: 52
    },
    {
        nombre:"Winter Collection",
        categorias:"ropa",
        img:"https://i.ibb.co/KD1B5W8/winter.jpg",
        id: 1993,
        descripcion:"Para proteger eficazmente a tu perro contra el frío, los productos de winter Collection son la mejor opcion",
        precio: 29,
        stock: 52
    },
    {
        nombre:"Simple Y Elegante",
        categorias:"Accesorios",
        img:"https://i.ibb.co/kSwvFbz/simpleyelegante.jpg",
        id: 1993,
        descripcion:"Destinada para los fanáticos de los accesorios simples pero elegantes, con materiales de alta calidad, una forma simple y clara que permitiran que tu perro pueda sobresalir esté donde esté.",
        precio: 29,
        stock: 52
    },
    {
        nombre:"Decorados",
        categorias:"ropa",
        img:"https://i.ibb.co/Hq6L5Ny/decorados.jpg",
        id: 1993,
        descripcion:"Collares con una mezcla de colores industriales laqueados, decorados con cinta textiles o brocados, tambien utilizamos componentes métalicos de lata calidad de níquel o latón.",
        precio: 29, 
        stock: 52
    },
    {
        nombre:"Linea de trabajo",
        categorias:"Accesorios",
        img:"https://i.ibb.co/HzcjTX9/trabajo.jpg",
        id: 1993,
        descripcion:"Coleccion de correras y collares de cuero, diseñados con énfasis en el uso práctico mientras se trabaja con perros. Apreciarás el material de cuero natural de calidad, la simplicidad y durabilidad.",
        precio: 29,
        stock: 52
    },
    {
        nombre:"Suave y Amigable",
        categorias:"Accesorios",
        img:"https://i.ibb.co/1M7XgzP/suave.jpg",
        id: 1993,
        descripcion:"Collares prácticos y adecuados para el uso diario. Reforzados por una correa doble de nylon y anillos en D solidos para que los collares pueden resistir un gran tirón.",
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
            productos.find((producto) => producto.id === id)
        )
    })
}

