'use client'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css';

export default function Footer() {
  const scrollToTop = useEffect(() => {

      window.scrollTo(0, 0);

  }, []);

  const dateObj = new Date();
  const currentYear = dateObj.getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {currentYear} Paul C Crescini</p>
        <p>
          <a
            href="https://www.freepik.com/free-vector/responsive-design-isometric-landing-user-interface_20836284.htm#query=website%20graphics&position=40&from_view=keyword&track=ais"
            target="_blank"
            rel="nofollow noreferrer"
            aria-label="Image by upklyak on Freepik (opens in new tab)"
          >
            Image by <strong>upklyak</strong> on Freepik
          </a>
        </p>
      </div>
      <button
        className={styles.scrollToTop}
        type="button"
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faAngleUp} size="2x" />
        <span className={styles.visuallyHidden}>scroll to top</span>
      </button>
    </footer>
  );
}
