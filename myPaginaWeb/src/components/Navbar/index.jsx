import styles from './navbar.module.scss';

const Navbar = () => {
  return (
 <div className={styles.container}>
        <p>Home</p>
        <p>Programas</p>
        <div class="dropdown is-active">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>Nosotros</span>
                    <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                    <a href="#" class="dropdown-item">
                        Quienes somos?
                    </a>
                    <a class="dropdown-item">
                        Aula Virtual
                    </a>
                    <a href="#" class="dropdown-item is-active">
                        Actualidad
                    </a>
                   
                    <a href="#" class="dropdown-item">
                        Login 
                    </a>
      
                </div>
            </div>
    </div>
    <textarea name="" id="" cols="20" rows="2"></textarea>
    <button>Buscar</button>
   
</div>
  );
};

export default Navbar;

