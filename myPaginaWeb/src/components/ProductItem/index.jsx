const ProductItem = ({ pokemon}) => {
  return (
    <div>
        <h3>{pokemon.name}</h3>
       <img src={pokemon.url} alt="" />
    
    </div>
  );
}

export default ProductItem;