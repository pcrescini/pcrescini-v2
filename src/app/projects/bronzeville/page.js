import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

import Link from 'next/link';
import Image from 'next/image';

import styles from '../projects.module.css';

export default function Bronzeville() {
  return (
    <section className={styles.projectPage}>
      <h6 className={`${montserrat.className} ${styles.mb1}`}>
        <Link href={`../../#projects`}>&larr; Back to Projects</Link>
      </h6>
      <h1 className={`h2 ${montserrat.className} ${styles.mb1}`}>
        Bronzeville Books
      </h1>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <p>
            Bronzeville Books is an independent book publisher focussed on
            elevating voices and stories that have long been underrepresented
            and need to be told.
          </p>
          <p>
            During my time with{' '}
            <a
              href="https://www.cart.com"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Link to Cart.com website (opens in new tab)"
            >
              Cart.com
            </a>
            , I served as the lead front-end web developer responsible for
            building out Bronzeville&#39;s ecommerce website.
          </p>
          <p>
            As the lead developer, it was my responsibility to initialize their
            store on Cart.com&#39;s ecommerce platform &mdash; Cart Storefront
            &mdash; and build out the store&#39;s theme based on Figma designs
            and brand guidelines created by our internal design team.
          </p>
          <p>Pages and components built include:</p>
          <ul>
            <li>Global Header and Footer</li>
            <li>Home Page</li>
            <li>Category Page Template</li>
            <li>Product Page Template</li>
            <li>Shopping Cart & Checkout</li>
            <li>Content Pages</li>
          </ul>
        </div>
        <div className={`${styles.containerContent} ${styles.textCenter}`}>
          <div className={styles.imageContainer}>
            <a
              className={styles.imageLink}
              href="https://www.bronzevillebooks.com"
              target="_blank"
              rel="noreferrer nofollow"
            >
              <Image
                className={styles.roundCorners}
                src="/bronzeville-books.png"
                alt="Screenshot of the Bronzeville Books website"
                width={1060}
                height={635}
              />
            </a>
          </div>
          <br />
          <a
            href="https://www.bronzevillebooks.com"
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
