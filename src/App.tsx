import { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import './App.css';

const About = lazy(() => import('./components/About/About'));
const Projects = lazy(() => import('./components/Projects/Projects'));

function App() {
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <Navbar onContactClick={() => setShowContact(true)} />
      <main>
        <section id="hero">
          <Hero />
        </section>

        <Suspense
          fallback={
            <p style={{ color: '#3ca7c278', textAlign: 'center' }}>.</p>
          }
        >
          <section id="about">
            <About />
          </section>

          <section id="projects">
            <Projects />
          </section>
        </Suspense>
      </main>

      <Footer onContactClick={() => setShowContact(true)} />
      {showContact && <Contact onClose={() => setShowContact(false)} />}
    </>
  );
}

export default App;
