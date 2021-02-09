import ItemList from "../../componentes/itemlist/Itemlist";
import { useState, useEffect } from "react";
import { getProducts } from "../../database/Database";

const ItemListContainer = ({ filter }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (filter !== "") {
      setLoading(true);
      setTimeout(() => {
        getProducts().then((resolve) => {
          debugger;
          let data = [];
          if (filter === "Ropa") {
            data = resolve.filter((item) => item.categoriaId === "ropa");
          } else if (filter === "Accesorios") {
            data = resolve.filter((item) => item.categoriaId === "accesorios");
          }
          console.log(data);
          setItems(data);
          setLoading(false);
        });
      }, 1000);
    }
  }, [filter]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getProducts().then((resolve) => {
        setItems(resolve);
        setLoading(false);
      });
    }, 1000);
  }, []);

  return <>{loading ? <h1>Cargando...</h1> : <ItemList items={items} />}</>;
};
export default ItemListContainer;
