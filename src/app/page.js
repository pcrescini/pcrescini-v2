import Main from '@/components/Main';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Main>
    </>
  );
}
