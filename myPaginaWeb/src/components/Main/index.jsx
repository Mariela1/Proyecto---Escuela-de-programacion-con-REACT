import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './main.module.css';

const Main = () => {
    const {isDark} = useContext(ThemeContext);
  return (
    <div className={isDark ? styles.dark : styles.light}>
        <section>
            <article>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </article>
        </section>
    </div>
  );
};

export default Main;