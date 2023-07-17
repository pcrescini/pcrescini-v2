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
            in July 2015 and have given countless speeches at my home club,{' '}
            <a
              href="https://talkingbull.toastmastersclubs.org/"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Link to Talking Bull Toastmasters website (opens in new tab)"
            >
              Talking Bull Toastmasters
            </a>
            .
          </p>
          <p>
            One of the skills we practice in Toastmasters is speaking within our
            allocated time. During speeches, a designated timer would
            keep track of the time and provide visual clues to the speaker once
          </p>
          <p>
            When the pandemic forced Toastmasters clubs to meet virtually,
            having an easy-to-use and readily accessible digital timing tool for
            speeches was paramount.
          </p>
          <p>
            Inspired by the{' '}
            <a
              href="https://tmtimer.calebgrove.com/"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Link to Caleb Grover Timer website (opens in new tab)"
            >
              {' '}
              Toastmasters Speech Timer created by Caleb Grove
            </a>
            , I wanted to see if I could recreate this tool from scratch and
            customize it to my own personal needs.
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
