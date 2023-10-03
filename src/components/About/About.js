import React from 'react';
import Image from 'next/image';

import styles from './About.module.css';

export default function About() {
  return (
    <section id="about">
      <div className={styles.container}>
        <div data-aos="fade-right" data-aos-duration="1000">
          <h2>About</h2>
          <p>
            Hello and welcome! I&#39;m Paul, and I&#39;m passionate about
            building things for the web.
          </p>

          <p>
            My web development journey started in the late 90s when I received a
            newsletter from my dial-up ISP with a guide on creating websites
            using HTML and CSS.
          </p>

          <p>
            Since then, I&#39;ve worked in the financial and ecommerce
            industries, supporting a diverse range of clients and collaborating
            with cross-functional teams to develop web applications, mobile
            apps, and responsive websites.
          </p>

          <p>
            What drives me is the joy of creating user-friendly experiences that
            blend design and functionality seamlessly. I enjoy staying updated
            with the latest web development trends and eagerly seek
            opportunities to learn new technologies, applying this knowledge to
            practical scenarios.
          </p>

          <p>
            I look forward to the chance to work on exciting projects and
            continue my growth in the ever-evolving world of web development.
            Let&#39;s create something great together!
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
