import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul className={styles.navegacao}>
        <li>
          <NavLink to="/ranek" end>
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink to="/contato">Contato</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
