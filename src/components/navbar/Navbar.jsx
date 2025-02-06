import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io';
import styles from './Navbar.module.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.brand}>
          <img src="/logo.svg" alt="Logo" className={styles.logo} />
        </Link>
        <button className={styles.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li>
              <Link to="/" className={styles.navLink}>Home</Link>
            </li>
            <li>
              <Link to="/recent-post" className={styles.navLink}>Recent Posts</Link>
            </li>
            <li>
              <Link to="/membership" className={styles.navLink}>Membership</Link>
            </li>
            <li>
              <button className={styles.searchButton}>
                <IoMdSearch /> Search
              </button>
            </li>
            <li>
              <button className={styles.joinButton}>Join</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
