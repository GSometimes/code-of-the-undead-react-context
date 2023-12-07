import Nav from '../components/Nav';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import NavContext from '../components/NavContext';

const Landing = () => {
  return (
    <>
      {/* <Nav /> */}
      <NavContext />
      <Hero />
      <About />
      <Contact />
    </>
  );
};

export default Landing;
