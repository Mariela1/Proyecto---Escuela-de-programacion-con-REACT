import styles from './navbar.module.scss';
import { Link, NavLink } from "react-router-dom";
import { BsFillCartFill  } from 'react-icons/bs';
import { useContext, useRef } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { BsFillSunFill } from 'react-icons/bs';
import { BsFillMoonFill } from 'react-icons/bs';
import {FaBars, FaTimes} from 'react-icons/fa';


const Navbar = () => {

    const {isDark, toggleTheme} = useContext(ThemeContext);
    const activeStyle = {
        color: "red",
    }

const navRef = useRef();

const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
}


  return (
 <header className={isDark ? styles.dark: styles.light}>
        
        <Link to ="/">
       <img src="img/logo.jpg" alt="" />
       </Link>
    <nav className='navbar'>

        <NavLink to="/home" style={({ isActive}) => (isActive? activeStyle : undefined)}>
            <a>Home</a>
        </NavLink>
        <NavLink to="/products" style={({ isActive}) => (isActive? activeStyle : undefined)}>
            <a>Products</a>
        </NavLink>
        <NavLink to="/CarritoCompras" style={({ isActive}) => (isActive? activeStyle : undefined)}>
        <BsFillCartFill />
        </NavLink>
        <NavLink to="/Login" style={({ isActive}) => (isActive? activeStyle : undefined)}>
            <a>Login</a>
        </NavLink>

        <button ckassName="nav-btn nav-close-btn" onClick={showNavBar}> 
            < FaTimes />
        </button>
       
    </nav>
       <button ckassName="nav-btn" onClick={showNavBar}>
            < FaBars/>
        </button>
     
       <button onClick={toggleTheme}>{isDark ? <BsFillSunFill />: <BsFillMoonFill />}</button>
</header>
  );

};

export default Navbar;

