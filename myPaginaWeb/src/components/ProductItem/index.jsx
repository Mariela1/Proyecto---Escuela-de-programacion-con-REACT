import ProductCard from "../ProductCard";

const ProductItem = ({ productos}) => {
  return (
    <div>
        
       {productos.map((producto) => (
        <ProductCard key={producto.key} producto={producto} />
        ))}
</div>

  );
}

export default ProductItem;