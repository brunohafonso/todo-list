import styles from './Header.module.css';
import Logo from '../../assets/Logo.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={Logo}  alt="TODO List" />
    </header>
  )
}