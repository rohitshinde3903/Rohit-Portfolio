'use client';

import Hero from './components/home/hero';
import Manifesto from './components/sections/Manifesto';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <Manifesto />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
