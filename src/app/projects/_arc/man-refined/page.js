import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

import Link from 'next/link';
import Image from 'next/image';

import styles from '../projects.module.css';

export default function ManRefined() {
  return (
    <section className={styles.projectPage}>
      <h6 className={`${montserrat.className} ${styles.mb1}`}>
        <Link href={`/#projects`}>&larr; Back to Projects</Link>
      </h6>
      <h1 className={`h2 ${montserrat.className} ${styles.mb1}`}>
        TheManRefined
      </h1>
      <div className={styles.container}>
        <div className={styles.containerContent}>
          <p>
            TheManRefined is an independent menswear retailer specializing in
            making high-quality, custom-made garments that don&#39;t break the
            bank.
          </p>
          <p>
            TheManRefined migrated its e-commerce store over to{' '}
            <a
              href="https://www.cart.com"
              target="_blank"
              rel="noreferrer nofollow"
              aria-label="Link to Cart.com website (opens in new tab)"
            >
              Cart.com
            </a>{' '}
            in 2022. I was one of three front-end web developers responsible for
            building their new ecommerce website on the Cart Storefront
            platform.
          </p>
          <p>
            My responsibilities included building out the following pages and
            templates based on the company&#39;s brand guidelines and the Figma
            designs created by our internal design team:
          </p>
          <ul>
            <li>
              Category Page Template with a Customizable Promotional Widget
            </li>
            <li>
              My Account Pages{' '}
              <span className={styles.tag}>
                (Overview, Orders, Wishlist, Payment Info)
              </span>{' '}
            </li>
            <li>Login, Logout & Forgot Password Pages</li>
            <li>
              Ecommerce Transactional Email Templates{' '}
              <span className={styles.tag}>
                (Account Registration, Lost Password, Order Confirmation, Order
                Shipped, Gift Certificate){' '}
              </span>
            </li>
          </ul>
        </div>
        <div className={`${styles.containerContent} ${styles.textCenter}`}>
          <div className={styles.imageContainer}>
            <a
              className={styles.imageLink}
              href="https://www.themanrefined.com"
              target="_blank"
              rel="noreferrer nofollow"
            >
              <Image
                className={styles.roundCorners}
                src="/man-refined.png"
                alt="Screenshot of TheManRefined website"
                width={1060}
                height={635}
              />
            </a>
          </div>
          <br />
          <a
            href="https://www.themanrefined.com"
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
