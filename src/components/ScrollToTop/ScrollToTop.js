'use client';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import useWindowScroll from '@/hooks/use-window-scroll';
import styles from './ScrollToTop.module.css';

export default function ScrollToTop() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  useWindowScroll(setShowScrollButton);

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
    <div className={styles.wrapper}>
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
