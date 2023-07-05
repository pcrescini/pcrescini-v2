'use client';
import Hamburger from '@/components/Hamburger';
import Drawer from '@/components/Drawer';
import useToggle from '@/hooks/use-toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useToggle(false);

  return (
    <nav
      className={showMobileNav ? `${styles.nav} ${styles.active}` : styles.nav}
      role="navigation"
      aria-label="Main Menu"
    >
      <div className={styles.menuIcon}>
        <Hamburger
          showMobileNav={showMobileNav}
          handleDismiss={setShowMobileNav}
        />
      </div>
      <Drawer handleDismiss={setShowMobileNav} title="Main Menu">
        <div className={styles.navElements}>
          <ul id="main-menu">
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
        </div>
      </Drawer>
    </nav>
  );
}
