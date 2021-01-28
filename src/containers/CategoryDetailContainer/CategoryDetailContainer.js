import CategoryDetail from "../../componentes/CategoryDetail/CategoryDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getProductsByCategory from "../../database/Database";
import "./CategoryDetailContainer.css";

export default function CategoriesDetailContainer() {
  //   const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]); // Aca tenes los productos filtrados

  const { categoriaId } = useParams();

  useEffect(() => {
    getProductsByCategory(categoriaId).then((result) => {
      setProducts(result);
    });
  }, [categoriaId]);

  return (
    <div className="category ">
      <h1>Hola Luis aca mete codigo para mostrar las categorias</h1>
      <CategoryDetail products={products} categoriaId={categoriaId} />
    </div>
  );
}
