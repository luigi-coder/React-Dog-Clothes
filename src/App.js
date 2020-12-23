import React  from 'react';
import NavBar from "./componentes/navbar/Navbar";
import Slider from './componentes/slider/Slider';
import './App.css'
import Footer from './componentes/footer/Footer'
import Olograma from './componentes/ologramas/Ologramas'
import "./App.css"
import ItemListContainer from './containers/Itemlistcontainer/ItemsListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemDetailContainer from './containers/itemDetailContainer/ItemDetailContainer';





 const App = ()=> {

  return (
    <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path={`/`}>
            <Slider />
            <Olograma />
            {/* <div className="container text-center ">
              <button className="centrar" onClick={cambiarTitulo}>Cambiar Titulo</button>
            </div> */}
            <ItemListContainer />
          </Route> 
          <Route exact path={`/detail/:id`}>
            <ItemDetailContainer/>
          </Route>
        </Switch>
        <Footer 
        titulo="Un diseño distinto..."
        subtitulo="Un salto hacia el futuro..."/>
    </BrowserRouter>
  )
 }
export default App;

