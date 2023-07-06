import { Montserrat } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Contact() {
  return (
    <section id="contact">
      <h2 className={montserrat.className}>Contact</h2>
      <div>
        <div data-aos="zoom-in" data-aos-duration="1000">
          <p>
            I am currently open to new career opportunities and connecting with
            like-minded people. So whether you have a question or just want to
            say hello 👋🏽, please reach out and I will do my best to get back to
            you!
          </p>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000">
          <div>
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
          <div>
            <a
              href="https://www.linkedin.com/in/paulccrescini/"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to my LinkedIn Profile (opens in new tab)"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </div>
          <div>
            <a
              href="https://github.com/pcrescini"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to my Github Profile (opens in new tab)"
            >
              <FontAwesomeIcon icon={faGithub} /> Github
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com/paulccrescini"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to my Twitter Account (opens in new tab)"
            >
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </a>
          </div>
          <div>
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
  );
}
