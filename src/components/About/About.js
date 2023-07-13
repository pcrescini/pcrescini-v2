import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import styles from './About.module.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function About() {
  return (
    <section id="about">
      <div className={styles.container}>
        <div data-aos="fade-right" data-aos-duration="1000">
          <h2 className={montserrat.className}>About</h2>
          <p>
            Hello and welcome! My name is Paul and I enjoy building things for
            the web.{' '}
          </p>
          <p>
            My love for building websites began in the late 90s when I received
            a newsleter from my dial up ISP with an article on how to create a
            website using HTML and CSS.
          </p>
          <p>
            Fast-forward to today, and I have had the honor of working with a
            diverse range of clients and collaborating with cross-functional
            teams to develop and maintain web applications, mobile apps, and
            responsive websites.
          </p>
          <p>
            I am passionate about creating intuitive and engaging user
            experiences that seamlessly integrate design and functionality. I am
            committed to staying up-to-date with the latest web development
            trends, learning new technologies, and excited to put that knowledge
            into practice.
          </p>
        </div>
        <div
          className={styles.imageContainer}
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <Image
            src={'/computer-graphic.jpg'}
            alt={
              'Image of a website developed on a desktop computer, a laptop computer, a table, and a mobile phone'
            }
            width={600}
            height={524}
          />
          <p className={styles.tag}>
            <a
              href="https://www.freepik.com/free-vector/responsive-design-isometric-landing-user-interface_20836284.htm#query=website%20graphics&position=40&from_view=keyword&track=ais"
              target="_blank"
              rel="nofollow noreferrer"
              aria-label="Image by upklyak on Freepik (opens in new tab)"
            >
              Image by <strong>upklyak</strong> on Freepik
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
