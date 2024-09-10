import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experiences';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
}

export default App;
