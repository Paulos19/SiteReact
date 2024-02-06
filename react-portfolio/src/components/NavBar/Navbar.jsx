import React, {useState} from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  <nav className={styles.navbar}>
    <a className={styles.title} href="/">Portifolio</a>
    <div className={styles.menu}>
      <img className={styles.menuBtn} src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} alt="menu-button" onClick={() => setMenuOpen(!menuOpen)}/>
      <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#Experiencia">Experiências</a>
        </li>
        <li>
          <a href="#Projetos">Projetos</a>
        </li>
        <li>
          <a href="#Contatos">Contatos</a>
        </li>
      </ul>
    </div>
  </nav>
  );
}
