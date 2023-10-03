'use client';
import React from 'react';

import { useState } from 'react';
import { ChevronUp } from 'react-feather';

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
        <ChevronUp size={48} />
        <span className={styles.visuallyHidden}> scroll to top </span>
      </button>
    </div>
  );
}
