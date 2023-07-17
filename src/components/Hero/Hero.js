import { Montserrat } from 'next/font/google';
import styles from './Hero.module.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Hero() {
  return (
    <section id="hero">
      <div>
        <div>
          <h4 className={montserrat.className}>Welcome! My name is</h4>
          <h1
            className={`${montserrat.className} ${styles.colorCelestialBlue}`}
          >
            Paul C Crescini.
          </h1>
          <h2 className={`${montserrat.className} ${styles.colorFederalBlue}`}>
            I enjoy building things for the web.
          </h2>
          <p>
            I&#39;m a front-end web developer based in Houston, TX specializing
            in creating delightful user experiences using HTML, CSS, and vanilla
            JavaScript. I am actively seeking out opportunities to ehance my
            expertise in React, Next.js and other various front-end web
            development frameworks.
          </p>
        </div>
        <div className={styles.pentagon}></div>
      </div>
    </section>
  );
}
