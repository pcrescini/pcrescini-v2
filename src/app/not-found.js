import React from 'react';
import Link from 'next/link';

import styles from './page.module.css';

export default function NotFound() {
  return (
    <section id="notFound">
      <h1 className={styles.primary}>404 Not Found</h1>
      <h2 className={styles.secondary}>Oh, this is embarrassing...</h2>
      <p>
        I can&#39;t seem to find the page you requested. While I work on finding
        it, please check out my home page to see what is currently available.
      </p>
      <Link href={`/`}>Take Me Home &rarr; </Link>
    </section>
  );
}
