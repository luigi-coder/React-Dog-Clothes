import React, {useEffect}  from 'react';
import NavBar from "./componentes/navbar/Navbar";
import Slider from './componentes/slider/Slider';
import './App.css'
import Footer from './componentes/footer/Footer'
import Olograma from './componentes/ologramas/Ologramas'
import "./App.css"
import ItemListContainer from './containers/Itemlistcontainer/ItemsListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemDetailContainer from './containers/itemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import CartContainer from './containers/CartContainer/CartContainer';

import {getFirestore} from "./firebase"



 const App = ()=> { 


    useEffect(()=> {

      const db = getFirestore() // referencia base de datos 
      const itemsCollection = db.collection("items") // referencia de collecion
      /* const query = itemsCollection.where("categoriaId", "!=", "ropa") 
      query.get()
      .then((resultado) => {
        resultado.docs.forEach((doc) => {
          console.log(doc.id)
          console.log(doc.data())
        })

      })
      .catch((err) => {
        console.log(err)
      }) */// por un solo filtro 
      const query = itemsCollection.get() //get() me trae todo en bruto

      query
      .then((resultado) => {
        resultado.docs.forEach((doc) => {
          console.log(doc.id)
          console.log(doc.data())
        })

      })
      .catch((err) => {
        console.log(err)
      })
      

    })
  return (
    <CartProvider>
      <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path={`/`}>
              <Slider />
              <Olograma/>
              {/* <div className="container text-center ">
                <button className="centrar" onClick={cambiarTitulo}>Cambiar Titulo</button>
              </div> */}
              <ItemListContainer />
            </Route> 
            <Route exact path={`/detail/:id`}>
              <ItemDetailContainer/>
            </Route>
            <Route exact path={`/cart`}>
              <CartContainer/>
            </Route>
          </Switch>
          <Footer 
          titulo="Un diseño distinto..."
          subtitulo="Un salto hacia el futuro..."/>
      </BrowserRouter>
    </CartProvider>
  )
 }
export default App;

