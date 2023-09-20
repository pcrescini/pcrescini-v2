import React from 'react';
import Link from 'next/link';

import styles from './page.module.css';

export const metadata = {
  title: '404 Not found • Paul C Crescini | Front-end Web Developer',
};

export default function NotFound() {
  return (
    <section id="notFound">
      <h1 className={styles.colorCelestialBlue}>404 Not Found</h1>
      <h2 className={styles.colorFederalBlue}>Oh, this is embarrassing...</h2>
      <p>
        I can't seem to find the page you requested. While I work on finding it,
        please check out my home page to see what is currently available.
      </p>
      <Link href={`/`}>Take Me Home &rarr; </Link>
    </section>
  );
}
