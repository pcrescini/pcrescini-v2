'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './Logo.module.css';

export default function Logo() {
  return (
    <div className={styles.navLogo}>
      <Link href="/">
        <Image
          src="/logo-black.png"
          width={82}
          height={75}
          alt="Logo of paulcrescini.dev website"
        />
      </Link>
    </div>
  );
}
