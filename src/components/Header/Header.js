'use client';

import Logo from '@/components/Logo';
import Navbar from '@/components/Navbar';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Navbar />
    </header>
  );
}
