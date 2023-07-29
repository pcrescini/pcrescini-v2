'use client';

import useEscapeKey from '@/hooks/use-escape-key';
import VisuallyHidden from '@/components/VisuallyHidden';
import styles from './Hamburger.module.css';

export default function Hamburger({ handleDismiss, showMobileNav }) {
  useEscapeKey(handleDismiss, showMobileNav);

  return (
    <button
      type="button"
      className={styles.hamburgerMenuButton}
      onClick={() => handleDismiss()}
      aria-expanded={showMobileNav}
      aria-controls="main-menu"
    >
      <div
        className={
          showMobileNav
            ? `${styles.hamburgerMenuBox} ${styles.active}`
            : styles.hamburgerMenuBox
        }
        aria-hidden="true"
        focusable="false"
      >
        <div className={styles.hamburgerMenuBoxInner}></div>
      </div>
      <VisuallyHidden>Open Main Menu</VisuallyHidden>
    </button>
  );
}
