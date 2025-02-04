import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { useState } from 'react';

function Header() {
  // État local pour gérer l'ouverture ou la fermeture du composant avec animations
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState(0);

  // Fonction pour ouvrir et fermer le menu
  function toggleMenu() {
    if (isOpen === true) {
      if (animation === 0) {
        setAnimation(1);
      } else {
        setAnimation(0);
      }
      setTimeout(() => {
        setIsOpen(false);
      }, 350);
    } else {
      setIsOpen(true);
      if (animation === 0) {
        setAnimation(1);
      } else {
        setAnimation(0);
      }
    }
  }

  return (
    <header role="banner" className={styles.header}>
      <h1 className={styles.title}>Sarah DAHMANI</h1>
      <nav className={styles.nav} role="navigation" aria-label="main navigation">
        <button
          aria-controls="toggleNavbar"
          aria-haspopup
          aria-expanded={isOpen}
          onClick={toggleMenu}
          animation={animation}
          className={styles.iconeNav}
        >
          <i className="fa-solid fa-bars fa-xl"></i>
          <span className="visually-hidden">Menu</span>
        </button>
        <ul
          id="toggleNavbar"
          animation={animation}
          className={`${styles.ul} ${isOpen ? '' : styles.hideMenu}`}
        >
          <li className={`${styles.li} ${styles.liTop}`}>
            <NavLink onClick={toggleMenu} className={styles.a} to="/">
              Accueil
            </NavLink>
          </li>
          <li className={`${styles.li} ${styles.liDown}`}>
            <NavLink onClick={toggleMenu} className={styles.a} to="/about">
              À Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

