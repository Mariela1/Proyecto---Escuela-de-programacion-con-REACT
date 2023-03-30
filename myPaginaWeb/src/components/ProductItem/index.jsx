const ProductItem = ({ producto}) => {
  return (
    <div>
        <h3>{producto.description}</h3>
       <img src={producto.images} alt="" height={200} width={200} />
    
    </div>
  );
}

export default ProductItem;