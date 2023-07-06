import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'] });

export default function About() {
  return (
    <section id="about">
      <div>
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
        <div data-aos="fade-left" data-aos-duration="1000"></div>
      </div>
    </section>
  );
}
