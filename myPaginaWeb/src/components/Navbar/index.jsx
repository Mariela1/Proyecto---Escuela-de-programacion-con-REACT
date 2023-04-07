import styles from './navbar.module.scss';
import { Link, NavLink } from "react-router-dom";
import { BsFillCartFill  } from 'react-icons/bs';

const Navbar = () => {
    const activeStyle = {
        color: "red",
    }
  return (
 <div className={styles.container}>
        <nav>
        <Link to ="/">
       <img src="img/logo.jpg" alt="" />
       </Link>
        <NavLink to="/home" style={({ isActive}) => (isActive? activeStyle : undefined)}>
            <p>Home</p>
        </NavLink>
        <NavLink to="/products" style={({ isActive}) => (isActive? activeStyle : undefined)}>
            <p>Products</p>
        </NavLink>
        <NavLink to="/CarritoCompras" style={({ isActive}) => (isActive? activeStyle : undefined)}>
        <BsFillCartFill />
        </NavLink>
        <NavLink to="/Login" style={({ isActive}) => (isActive? activeStyle : undefined)}>
            <p>Login</p>
        </NavLink>
       </nav>
   
</div>
  );
};

export default Navbar;

