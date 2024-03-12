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
          src="/logo.png"
          width={100}
          height={91}
          alt="Logo of paulcrescini.com website"
        />
      </Link>
    </div>
  );
}
