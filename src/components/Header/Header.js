'use client'
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import useToggle from '@/hooks/use-toggle';
import styles from './Header.module.css';


export default function Header() {
  const [isMenuOpen, toggleIsMenuOpen] = useToggle(false);

  return (
    <header
      className={
        isMenuOpen ? `${styles.navOpen} ${styles.header}` : styles.header
      }
    >
      <div className={styles.nav__logo}>
        <a href="/">
          <Image
            src="/logo.png"
            width={82}
            height={75}
            alt="Logo of paulcrescini.dev website"
          />
        </a>
      </div>
      <nav
        className={
          isMenuOpen
            ? `${styles.nav} ${styles.navMenuSidebar}`
            : `${styles.nav} ${styles.navLinks}`
        }
        role="navigation"
        aria-label="Main Menu"
      >
        <button
          type="button"
          className={styles.navMenuButton}
          onClick={toggleIsMenuOpen}
          aria-expanded={isMenuOpen}
        >
          <div
            className={styles.hamburgerMenuBox}
            aria-hidden="true"
            focusable="false"
          >
            <div className={styles.hamburgerMenuBoxInner}></div>
          </div>
          <span className={styles.visuallyHidden}>Open Main Menu</span>
        </button>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a
          className={styles.resumeLink}
          href="./assets/files/paul-c-crescini-resume.pdf"
          target="_blank"
          aria-label="Link to my Resume in PDF format (opens in new tab)"
        >
          Resume <FontAwesomeIcon icon={faUpRightFromSquare} />
        </a>
      </nav>
    </header>
  );
}
