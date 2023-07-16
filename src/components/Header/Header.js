'use client';
import { useState } from 'react';
import useWindowScroll from '@/hooks/use-window-scroll';
import Logo from '@/components/Logo';
import Navbar from '@/components/Navbar';
import styles from './Header.module.css';

export default function Header() {
  const [showHeaderShadow, setShowHeaderShadow] = useState(false);
  useWindowScroll(setShowHeaderShadow);

  const headerStyle = showHeaderShadow
    ? `${styles.header} ${styles.scrolled}`
    : `${styles.header}`;

  return (
    <header className={headerStyle}>
      <Logo />
      <Navbar />
    </header>
  );
}
