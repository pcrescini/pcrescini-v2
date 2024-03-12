import Link from 'next/link';

import { Montserrat } from 'next/font/google';
import { Link as LinkIcon } from 'react-feather';

import styles from './ProjectPageNav.module.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function ProjectPageNav({ title, codeURL, liveURL }) {
  return (
    <>
      <p className={`h6 ${montserrat.className} ${styles.mb1}`}>
        <Link href="/#projects" scroll={true}>
          ← Back to Projects
        </Link>
      </p>
      <h1 className={`h2 ${montserrat.className} ${styles.mb1}`}>{title}</h1>
      <div className={styles.mb1}>
        <a
          href={liveURL}
          target="_blank"
          rel="noreferrer nofollow"
          aria-label="Link to Live Demo"
        >
          Live Site <LinkIcon size={16} />
        </a>{' '}
        {codeURL && (
          <>
            {' '}
            <a
              href={codeURL}
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Link to GitHub Code Repository"
            >
              GitHub <LinkIcon size={16} />
            </a>
          </>
        )}
      </div>
    </>
  );
}
