import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

import Link from 'next/link';
import Image from 'next/image';

import styles from '../projects.module.css';

export default function IvzIndexing() {
  return (
    <section className={styles.projectPage}>
      <h6 className={`${montserrat.className} ${styles.mb1}`}>
        <Link href={`../../#projects`}>&larr; Back to Projects</Link>
      </h6>
      <h1 className={`h2 ${montserrat.className} ${styles.mb1}`}>
        Invesco Indexing
      </h1>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <p>
            Invesco Indexing is a collection of proprietary financial indexes
            that leverage the global scale of{' '}
            <a
              href="https://www.invesco.com/us/"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Link to Invesco Indexing website (opens in new tab)"
            >
              Invesco
            </a>{' '}
            — one of the world&#39;s premier global investment management firms.
          </p>
          <p>
            Prior to launching their indexes to the public, the company wanted a
            webstite to house all index information that was separate from their
            U.S. product center. At the time, the Invesco Americas Marketing &
            Techonology team was exploring new content management systems and
            decided to build out this website on{' '}
            <a
              href="https://www.magnolia-cms.com/"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Link to Magnolia CMS website (opens in new tab)"
            >
              Magnolia
            </a>
            , an enterprise headless content management system.
          </p>
          <p>
            As one of the front-end members of the Scrum team assigned to this
            project, I was responsible for creating and styling the page and
            component templates used on the home page, the equity and fixed
            income indexes landing pages, and the individual index detail pages.
          </p>
          <p>
            In addition, I served as the lead CMS author who was responsible for
            creating creating pages, uploading assets, and implementing content
            within the CMS whenever new indexes were launched.
          </p>
        </div>
        <div className={`${styles.containerContent} ${styles.textCenter}`}>
          <div className={styles.imageContainer}>
            <a
              className={styles.imageLink}
              href="https://www.invescoindexing.com"
              target="_blank"
              rel="noreferrer nofollow"
            >
              <Image
                className={styles.roundCorners}
                src="/invesco-indexing.png"
                alt="Screenshot of the Invesco Indexing website"
                width={1060}
                height={635}
              />
            </a>
          </div>
          <br />
          <a
            href="https://www.invescoindexing.com"
            target="_blank"
            rel="noreferrer nofollow"
            aria-label="View the website (opens in new tab)"
          >
            View the website <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </div>
      </div>
    </section>
  );
}
