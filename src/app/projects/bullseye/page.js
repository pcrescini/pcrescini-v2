import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

import Link from 'next/link';
import Image from 'next/image';

import styles from '../projects.module.css';

export default function Bullseye() {
  return (
    <section className={styles.projectPage}>
      <h6 className={`${montserrat.className} ${styles.mb1}`}>
        <Link href={`/#projects`}>&larr; Back to Projects</Link>
      </h6>
      <h1 className={`h2 ${montserrat.className} ${styles.mb1}`}>
        Bullseye! - JS Video Game
      </h1>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <p>
            Bullseye! is an animated physics game created using vanilla
            JavaScript, HTML, CSS, and HTML Canvas.
          </p>
          <p>
            I&#39;ve never worked with the HTML Canvas
            element prior to this project. So when{' '}
            <a
              href="https://www.freecodecamp.org/news/create-an-animated-physics-game-with-javascript/"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Link to freeCodeCamp website (opens in new tab)"
            >
              freeCodeCamp
            </a>{' '}
            came out with a free course that uses the HTML Canvas to animate a
            simple game, I jumped at the chance to learn more while exercising
            my JavaScript skills.
          </p>
          <p>While working on this project, I learned how to: </p>
          <ul>
            <li>implement a very simple AI to make the creatures feel alive</li>
            <li>
              control the game&#39;s FPS and how to measure time to trigger
              periodic events
            </li>
            <li>
              apply collision detection, resolve collisions and use that to
              simulate physics
            </li>
            <li>
              use the built-in drawImage method to draw randomized game
              environments and animated characters from a sprite sheet
            </li>
            <li>
              capture mouse position and animate an 8 directional sprite sheet
              based on the relative position between the mouse and the player
              character
            </li>
          </ul>
          <p>Future enchancements for this project include:</p>
          <ul>
            <li>refactoring the code to make the game mobile responsive</li>
            <li>adding in music and sound effects</li>
            <li>implementing difficulty settings</li>
            <li>adding in a high score scoreboard</li>
          </ul>
        </div>
        <div className={`${styles.containerContent} ${styles.textCenter}`}>
          <div className={styles.imageContainer}>
            <a
              className={styles.imageLink}
              href="https://paulcrescini.dev/examples/web-game/"
              target="_blank"
              rel="noreferrer nofollow"
            >
              <Image
                className={styles.roundCorners}
                src="/js-web-game.png"
                alt="Screenshow of the Bullseye! - JS Video Game"
                width={1060}
                height={635}
              />
            </a>
          </div>
          <br />
          <a
            href="https://paulcrescini.dev/examples/web-game/"
            target="_blank"
            rel="noreferrer nofollow"
            aria-label="View the Bullseye! game website (opens in new tab)"
          >
            View the website <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
          <br />
          <a
            href="https://github.com/pcrescini/bullseye-js-game"
            target="_blank"
            rel="noreferrer nofollow"
            aria-label="View the Bullseye! Game website code in Github (opens in new tab)"
          >
            View the code <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </div>
      </div>
    </section>
  );
}
