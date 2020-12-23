import React  from 'react';
import NavBar from "./componentes/navbar/Navbar";
import Slider from './componentes/slider/Slider';
import './App.css'
import Footer from './componentes/footer/Footer'
import Olograma from './componentes/ologramas/Ologramas'
import "./App.css"
import Contador from "./componentes/itemcount/ItemCount"
import ItemListContainer from './containers/Itemlistcontainer/ItemsListContainer';


 const App = ()=> {

  return (
    <div>
        <NavBar />
        <Slider />
        <Olograma />
        {/* <div className="container text-center ">
          <button className="centrar" onClick={cambiarTitulo}>Cambiar Titulo</button>
        </div> */}
        <Contador 
        initialValue={1}
        stock={10}
        />
        <ItemListContainer />
        <Footer 
        titulo="Un diseño distinto..."
        subtitulo="Un salto hacia el futuro..."/>
    </div>
  )
 }
export default App;

