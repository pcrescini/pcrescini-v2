import React from 'react';

import Logo from '@/components/Logo';
import Navbar from '@/components/Navbar';

import styles from './Header.module.css';

export default function Header({ theme }) {
  return (
    <header className={styles.header}>
      <Logo />
      <Navbar initialTheme={theme} />
    </header>
  );
}
