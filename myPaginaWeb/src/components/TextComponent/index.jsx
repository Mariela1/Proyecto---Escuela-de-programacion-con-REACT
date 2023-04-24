import styles from './text.module.css';

const TextComponent  = ({condition}) => {

  return (
  <h2 className={condition ? styles.greenyellow : styles.red }> TextComponent </h2>
  );
  
};

export default TextComponent ;