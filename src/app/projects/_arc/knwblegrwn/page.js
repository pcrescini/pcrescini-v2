import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

import Link from 'next/link';
import Image from 'next/image';

import styles from '../projects.module.css';

export default function Knwblegrwn() {
  return (
    <section className={styles.projectPage}>
      <h6 className={`${montserrat.className} ${styles.mb1}`}>
        <Link href={`/#projects`}>&larr; Back to Projects</Link>
      </h6>
      <h1 className={`h2 ${montserrat.className} ${styles.mb1}`}>
        Knwble Grwn
      </h1>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <p>
            Knwble Grwn is a brand with a mission to support what matters most
            to people and the planet. Their products are produced by small or
            traditionally underrepresented farmers who use regenerative
            agricultural practices to help protect the environment.
          </p>
          <p>
            Knwble Grwn partnered with{' '}
            <a
              href="https://www.cart.com"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Link to Cart.com website (opens in new tab)"
            >
              Cart.com
            </a>{' '}
            in 2022 to expand its ecommerce channels beyond Amazon.
          </p>
          <p>
            Since they did not initially require the full ecommerce capabilities
            of the Cart Storefront, I built a landing page based on Figma
            designs created by our internal design team.
          </p>
          <p>
            I enjoyed working on this project as it was fun to build out a
            design that was both simple and elegant.
          </p>
        </div>
        <div className={`${styles.containerContent} ${styles.textCenter}`}>
          <div className={styles.imageContainer}>
            <a
              className={styles.imageLink}
              href="https://www.knwblegrwn.com/?SessionThemeID=3"
              target="_blank"
              rel="noreferrer nofollow"
            >
              <Image
                className={styles.roundCorners}
                src="/knwble-grwn.png"
                alt="Screenshot of the Knwble Grwn website"
                width={1060}
                height={635}
              />
            </a>
          </div>
          <br />
          <a
            href="https://www.knwblegrwn.com/?SessionThemeID=3"
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
