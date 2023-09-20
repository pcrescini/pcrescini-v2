import Link from 'next/link';
import { Montserrat } from 'next/font/google';

import styles from './ProjectPageNav.module.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function ProjectPageNav({ title }) {
  return (
    <>
      <h6 className={`${montserrat.className} ${styles.mb1}`}>
        <Link href={`/#projects`}>&larr; Back to Projects</Link>
      </h6>
      <h1 className={`h2 ${montserrat.className} ${styles.mb1}`}>{title}</h1>
    </>
  );
}
