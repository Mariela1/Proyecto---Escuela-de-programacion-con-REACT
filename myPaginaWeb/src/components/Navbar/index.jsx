import styles from './navbar.module.scss';
import { Link, NavLink } from "react-router-dom";
import { BsFillCartFill  } from 'react-icons/bs';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { BsFillSunFill } from 'react-icons/bs';
import { BsFillMoonFill } from 'react-icons/bs';


const Navbar = () => {

    const {isDark, toggleTheme} = useContext(ThemeContext);
    const activeStyle = {
        color: "red",
    }
   
  return (
 <div className={isDark ? styles.dark: styles.light}>
        <nav className='navbar'>
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
     
    
       <button onClick={toggleTheme}>{isDark ? <BsFillSunFill />: <BsFillMoonFill />}</button>
</div>
  );

};

export default Navbar;

