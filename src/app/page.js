import SkipNav from '@/components/SkipNav';
import Header from '../components/Header';
import Main from '@/components/Main';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <SkipNav />
      <Header />
      <Main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Main>
      <Footer />
    </>
  );
}
