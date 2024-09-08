import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Resume from './components/Resume';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Resume />
      <Contact />
    </>
  );
}

export default App;
