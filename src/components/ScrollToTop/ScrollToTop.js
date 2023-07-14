'use client';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import styles from './ScrollToTop.module.css';

export default function ScrollToTop() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const wrapperElementRef = useRef();

  useEffect(() => {
    function handleWindowScroll() {
      if (window.scrollY > 50) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    }

    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollButtonDisplayStyle = showScrollButton
    ? `${styles.scrollToTop} ${styles.reveal}`
    : `${styles.scrollToTop}`;

  return (
    <div ref={wrapperElementRef} className={styles.wrapper}>
      <button
        className={scrollButtonDisplayStyle}
        type="button"
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faAngleUp} size="2x" />
        <span className={styles.visuallyHidden}> scroll to top </span>
      </button>
    </div>
  );
}
