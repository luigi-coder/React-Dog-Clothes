import Item from "../item/Item";

export default function CategoryDetail({ products, categoriaId }) {
  return (
    <div>
      <h1>{categoriaId}</h1>
      <div>
        {products ? (
          products.map((product, index) => {
            return <Item item={product} key={index} />;
          })
        ) : (
          <div className="cart__vacio">
            <h3 className="titulo">
              Actualmente no tienes artículos en esta {categoriaId}
            </h3>
            {/* crea algun link que vuelva a los items pras que compre si la categoria esta ESTA VACIA */}
          </div>
        )}
      </div>
    </div>
  );
}
