import React from 'react';

import styles from './Footer.module.css';

export default function Footer() {
  const dateObj = new Date();
  const currentYear = dateObj.getFullYear();
  return (
    <footer className={styles.footer}>
      &copy;{currentYear} Paul C Crescini
    </footer>
  );
}
