import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

import Link from 'next/link';
import Image from 'next/image';

import styles from '../projects.module.css';

export default function SpeechTimer() {
  return (
    <section className={styles.projectPage}>
      <h6 className={`${montserrat.className} ${styles.mb1}`}>
        <Link href={`/#projects`}>&larr; Back to Projects</Link>
      </h6>
      <h1 className={`h2 ${montserrat.className} ${styles.mb1}`}>
        Speech Timer
      </h1>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <p>
            I joined{' '}
            <a
              href="https://www.toastmasters.org/"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Link to Toastmasters International website (opens in new tab)"
            >
              Toastmasters International
            </a>{' '}
            in July 2015 and have given countless speeches at my clubs,{' '}
            <a
              href="https://talkingbull.toastmastersclubs.org/"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Link to Talking Bull Toastmasters website (opens in new tab)"
            >
              Talking Bull Toastmasters
            </a>{' '}
            and{' '}
            <a
              href="https://6422.toastmastersclubs.org/"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Link to All Star Toastmasters website (opens in new tab)"
            >
              All Star Toastmasters
            </a>
            .
          </p>
          <p>
            One of the skills we practice in Toastmasters is speaking within our
            allotted time. During speeches, a designated timer keeps track of
            the time and provides visual clues to the speaker when they are near
            the end of their allotted time.
          </p>
          <p>
            When the pandemic forced Toastmasters clubs to meet virtually,
            having an easy-to-use and readily accessible digital timing tool for
            speeches was paramount. I found the timer app on my smartphone
            cumbersome, so I created this tool to simplify things.
          </p>
        </div>
        <div className={`${styles.containerContent} ${styles.textCenter}`}>
          <div className={styles.imageContainer}>
            <a
              className={styles.imageLink}
              href="https://paulcrescini.dev/examples/timer/"
              target="_blank"
              rel="noreferrer nofollow"
            >
              <Image
                className={styles.roundCorners}
                src="/speech-timer.png"
                alt="Screenshow of the Speech Timer website"
                width={1060}
                height={635}
              />
            </a>
          </div>
          <br />
          <a
            href="https://paulcrescini.dev/examples/timer/"
            target="_blank"
            rel="noreferrer nofollow"
            aria-label="View the Speech Timer website (opens in new tab)"
          >
            View the website <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
          <br />
          <a
            href="https://github.com/pcrescini/speech-timer"
            target="_blank"
            rel="noreferrer nofollow"
            aria-label="View the Speech Timer code in Github (opens in new tab)"
          >
            View the code <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </div>
      </div>
    </section>
  );
}
