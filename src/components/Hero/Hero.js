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
            I'm a front-end developer specializing in creating delightful user
            experiences using HTML, CSS, and vanilla JavaScript. I'm currently
            focussed on leveling up my React and Next.js skills and am always
            seeking new challenges and opportunities to enhance my skills and
            expertise.
          </p>
        </div>
        <div></div>
      </div>
    </section>
  );
}
