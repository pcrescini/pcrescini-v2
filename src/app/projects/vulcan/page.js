import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

import Link from 'next/link';
import Image from 'next/image';

import styles from '../projects.module.css';

export default function Vulcan() {
  return (
    <section className={styles.projectPage}>
      <h6 className={`${montserrat.className} ${styles.mb1}`}>
        <Link href={`/#projects`}>&larr; Back to Projects</Link>
      </h6>
      <h1 className={`h2 ${montserrat.className} ${styles.mb1}`}>Vulcan</h1>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <p>
            Vulcan is the leading direct to consumer brand for premium firearm
            accessories. By cutting out the middlemen, leveraging social media, and
            utilizing global distribution networks, we can provide innovative
            and premium products at affordable prices worldwide.
          </p>
          <p>
            Vulcan aquired the help{' '}
            <a
              href="https://www.cart.com/solution/growth-marketing"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Link to Cart.com Growth Marketing webpage (opens in new tab)"
            >
              Cart.com&#39;s Growth Marketing
            </a>{' '}
            team to design, develop, and deliver various media campaigns.
          </p>
          <p>
            One campaign required building an email campaign landing page on
            Vulcan&#39;s{' '}
            <a
              href="https://www.shopify.com/"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Link to Shopify website (opens in new tab)"
            >
              Shopify
            </a>{' '}
            storefront. As the front-end developer for this project with no
            prior Shopify experience, I had to quickly familiarize myself with
            Shopify&#39;s theme architecture and Liquid templating language.
          </p>
          <p>
            Once I had a solid grasp, I created a new layout based on Vulcan&#39;s
            existing theme and then built out new custom sections following the
            Figma design created by our internal design team.
          </p>
        </div>
        <div className={`${styles.containerContent} ${styles.textCenter}`}>
          <div className={styles.imageContainer}>
            <a
              className={styles.imageLink}
              href="https://vulcanarms.com/pages/email-weatherlock-bags"
              target="_blank"
              rel="noreferrer nofollow"
            >
              <Image
                className={styles.roundCorners}
                src="/vulcan-weatherlock-bags.png"
                alt="Screenshot of the Vulcan - Weatherlock Bags website"
                width={1060}
                height={635}
              />
            </a>
          </div>
          <br />
          <a
            href="https://vulcanarms.com/pages/email-weatherlock-bags"
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
