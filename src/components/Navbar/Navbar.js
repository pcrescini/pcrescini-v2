'use client';
import React from 'react';

import { useEffect } from 'react';
import { Sun, Moon } from 'react-feather';

import Cookie from 'js-cookie';

import { LIGHT_TOKENS, DARK_TOKENS } from '@/constants';

import Hamburger from '@/components/Hamburger';
import Drawer from '@/components/Drawer';
import VisuallyHidden from '@/components/VisuallyHidden';
import useToggle from '@/hooks/use-toggle';
import useIsMobile from '@/hooks/use-is-mobile';

import styles from './Navbar.module.css';

export default function Navbar({ initialTheme }) {
  const [showMobileNav, setShowMobileNav] = useToggle(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile && showMobileNav) {
      setShowMobileNav(false);
    }
  }, [isMobile, showMobileNav, setShowMobileNav]);

  const [theme, setTheme] = React.useState(initialTheme);

  function handleClick() {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);

    Cookie.set('color-theme', nextTheme, { expires: 1000 });

    const root = document.documentElement;
    const colors = nextTheme === 'light' ? LIGHT_TOKENS : DARK_TOKENS;

    root.setAttribute('data-color-theme', nextTheme);
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }
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
              <button className={styles.action} onClick={handleClick}>
                {theme === 'light' ? <Sun size={24} /> : <Moon size={24} />}
                <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
              </button>
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
            <button className={styles.action} onClick={handleClick}>
              {theme === 'light' ? <Sun size={24} /> : <Moon size={24} />}
              <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
            </button>
          </div>
        </nav>
      )}
    </>
  );
}
