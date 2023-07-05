import Image from 'next/image';
import styles from './page.module.css';
import { Montserrat } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faI, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div id="overlay">
      <main id="mainContent">
        <section id="hero" class="color--federal-blue">
          <div class="container">
            <div class="container__content">
              <h4>Welcome! My name is</h4>
              <h1 class="color--celestial-blue">Paul C Crescini.</h1>
              <h2 class="color--federal-blue">
                I enjoy building things for the web.
              </h2>
              <p>
                I'm a front-end developer specializing in creating delightful
                user experiences using HTML, CSS, and vanilla JavaScript. I'm
                currently focussed on leveling up my React and Next.js skills
                and am always seeking new challenges and opportunities to
                enhance my skills and expertise.
              </p>
            </div>
            <div class="pentagon"></div>
          </div>
        </section>
        <section id="about">
          <div class="container">
            <div
              class="container__content"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h2>About</h2>
              <p>
                Hello and welcome! My name is Paul and I enjoy building things
                for the web.{' '}
              </p>
              <p>
                My love for building websites began in the late 90s when I
                received a newsleter from my dial up ISP with an article on how
                to create a website using HTML and CSS.
              </p>
              <p>
                Fast-forward to today, and I have had the honor of working with
                a diverse range of clients and collaborating with
                cross-functional teams to develop and maintain web applications,
                mobile apps, and responsive websites.
              </p>
              <p>
                I am passionate about creating intuitive and engaging user
                experiences that seamlessly integrate design and functionality.
                I am committed to staying up-to-date with the latest web
                development trends, learning new technologies, and excited to
                put that knowledge into practice.
              </p>
            </div>
            <div
              class="container__content txt-right hide-mobile"
              data-aos="fade-left"
              data-aos-duration="1000"
            ></div>
          </div>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <div class="projects__container">
            <div
              class="projects__card"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div class="pad-2">
                <h3>Bronzeville Books</h3>
                <p class="tag">ecommerce | cart storefront</p>
                <p>
                  Bronzeville Books is an independent book publisher focussed on
                  elevating voices and stories that have long been
                  underrepresented and need to be told.
                </p>
                <p class="link">
                  <a href="./projects/bronzeville">Learn more →</a>
                </p>
              </div>
            </div>
            <div
              class="projects__card"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div class="pad-2">
                <h3>Knwble Grwn</h3>
                <p class="tag">ecommerce | cart storefront</p>
                <p>
                  Knwble Grwn is a brand with a mission to support what matters
                  most people and the planet. Their products are produced by
                  small or traditionally underrepresented farmers who use
                  regenerative agricultural practices to help protect the
                  environment.
                </p>
                <p class="link">
                  <a href="./projects/knwble-grwn">Learn more →</a>
                </p>
              </div>
            </div>
            <div
              class="projects__card"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div class="pad-2">
                <h3>Vulcan</h3>
                <p class="tag">ecommerce | shopify</p>
                <p>
                  Vulcan is the leading direct to consumer brand for premium
                  firearm accessories. By cutting out middlemen, leveraging
                  social media, and utilizing global distribution networks we
                  can provide innovative and premium products at affordable
                  prices worldwide.
                </p>
                <p class="link">
                  <a href="./projects/vulcan/">Learn more →</a>
                </p>
              </div>
            </div>
            <div
              class="projects__card"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div class="pad-2">
                <h3>Invesco Indexing</h3>
                <p class="tag">finance | magnolia cms</p>
                <p>
                  Invesco Indexing develops and licenses customized, proprietary
                  indexes that leverage the global scale of Invesco — one of the
                  world’s premiere global investment management firms.
                </p>
                <p class="link">
                  <a href="./projects/ivz-indexing">Learn more →</a>
                </p>
              </div>
            </div>
            <div
              class="projects__card"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div class="pad-2">
                <h3>Speech Timer</h3>
                <p class="tag">personal project</p>
                <p>
                  Speech Timer is a tool geared towards timing speeches that
                  follow Toastmaters International's speech formats.
                </p>
                <p class="link">
                  <a href="./projects/speech-timer">Learn more →</a>
                </p>
              </div>
            </div>
            <div
              class="projects__card"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div class="pad-2">
                <h3>Bullseye! JavaScript Game</h3>
                <p class="tag">personal project</p>
                <p>
                  Bullseye! is 2D game created using vanilla JavaScript, HTML5,
                  CSS3, and HTML Canvas.
                </p>
                <p class="link">
                  <a href="./projects/video-game">Learn more →</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <div class="container">
            <div
              class="container__content"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <p>
                I am currently open to new career opportunities and connecting
                with like-minded people. So whether you have a question or just
                want to say hello 👋🏽, please reach out and I will do my best to
                get back to you!
              </p>
            </div>
            <div
              class="container__content contact-social"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div class="contact-social__email">
                <a
                  href="mailto:paul.c.crescini@gmail.com?subject=Hello%20👋🏽"
                  target="_blank"
                  rel="nofollow noreferrer"
                  aria-label="Email me at paul.c.crescini@gmail.com"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                  Email
                </a>
              </div>
              <div class="contact-social__linkedin">
                <a
                  href="https://www.linkedin.com/in/paulccrescini/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Link to my LinkedIn Profile (opens in new tab)"
                >
                  <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
              </div>
              <div class="contact-social__github">
                <a
                  href="https://github.com/pcrescini"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Link to my Github Profile (opens in new tab)"
                >
                  <FontAwesomeIcon icon={faGithub} /> Github
                </a>
              </div>
              <div class="contact-social__twitter">
                <a
                  href="https://twitter.com/paulccrescini"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Link to my Twitter Account (opens in new tab)"
                >
                  <FontAwesomeIcon icon={faTwitter} /> Twitter
                </a>
              </div>
              <div class="contact-social__instagram">
                <a
                  href="https://www.instagram.com/lets_eat_htx/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Link to my Instagram Account (opens in new tab)"
                >
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
