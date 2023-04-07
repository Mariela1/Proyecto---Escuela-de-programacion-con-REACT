
import styles from './productCard.module.css';
import { Link } from 'react-router-dom';

const ProductCard = ({producto}) => {
  return (
    <Link to={`${producto.id}`}> 
    <div className={styles.container}>
        <h3>{producto.title}</h3>
        <img src={producto.images} />
        <p>{producto.description}</p>
    </div>
    </Link>
    
  );
};

export default ProductCard;