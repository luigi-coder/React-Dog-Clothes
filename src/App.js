import React from "react";
import NavBar from "./componentes/navbar/Navbar";
import Slider from "./componentes/slider/Slider";
import "./App.css";
import Footer from "./componentes/footer/Footer";
import Olograma from "./componentes/ologramas/Ologramas";
import "./App.css";
import ItemListContainer from "./containers/Itemlistcontainer/ItemsListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./containers/itemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import CartContainer from "./containers/CartContainer/CartContainer";
import CheckoutContainer from "./containers/CheckoutContainer/CheckoutContainer";
import CategoryDetailContainer from "./containers/CategoryDetailContainer/CategoryDetailContainer";

const App = () => {
  return (
    <CartProvider>
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
            <ItemDetailContainer />
          </Route>
          <Route exact path={`/category/:categoriaId`}>
            {/* cree este contenedor */}
            <CategoryDetailContainer />
          </Route>
          <Route exact path={`/cart`}>
            <CartContainer />
          </Route>
          <Route exact path={`/checkout`}>
            <CheckoutContainer />
          </Route>
        </Switch>
        <Footer
          titulo="Un diseño distinto..."
          subtitulo="Un salto hacia el futuro..."
        />
      </BrowserRouter>
    </CartProvider>
  );
};
export default App;


