'use client';
import Hamburger from '@/components/Hamburger';
import Drawer from '@/components/Drawer';
import useToggle from '@/hooks/use-toggle';
import useIsMobile from '@/hooks/use-is-mobile';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useToggle(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile && showMobileNav) {
      setShowMobileNav(false);
    }
  }, [isMobile, showMobileNav]);

  return (
    <>
      {isMobile ? (
        <nav
          className={
            showMobileNav ? `${styles.nav} ${styles.active}` : styles.nav
          }
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
                  <a href="/#about">About</a>
                </li>
                <li>
                  <a href="/#projects">Projects</a>
                </li>
                <li>
                  <a href="/#contact">Contact</a>
                </li>
              </ul>
              <a
                className={styles.resumeLink}
                href="/paul-c-crescini-resume.pdf"
                target="_blank"
                aria-label="Link to my Resume in PDF format (opens in new tab)"
              >
                Resume <FontAwesomeIcon icon={faUpRightFromSquare} />
              </a>
            </div>
          </Drawer>
        </nav>
      ) : (
        <nav className={styles.nav} role="navigation" aria-label="Main Menu">
          <div className={styles.navElements}>
            <ul id="main-menu">
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/#projects">Projects</a>
              </li>
              <li>
                <a href="/#contact">Contact</a>
              </li>
            </ul>
            <a
              className={styles.resumeLink}
              href="/paul-c-crescini-resume.pdf"
              target="_blank"
              aria-label="Link to my Resume in PDF format (opens in new tab)"
            >
              Resume <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
          </div>
        </nav>
      )}
    </>
  );
}
