import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experiences';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Resume from './components/Resume';
import SectionDivider from './components/SectionDivider';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <SectionDivider sectionNumber="01" sectionText="About" />
      <About />
      <SectionDivider sectionNumber="02" sectionText="Experience" />
      <Experience />
      <SectionDivider sectionNumber="03" sectionText="Projects" />
      <Projects />
      <SectionDivider sectionNumber="04" sectionText="Resume" />
      <Resume />
      <SectionDivider sectionNumber="05" sectionText="Contact" />
      <Contact />
    </>
  );
}

export default App;
