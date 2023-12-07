import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from '../utils/useMediaQuery';
import { Link } from 'react-scroll';
import NSLogo from '../assets/NSLogo.png';

// framer variants
// nav variant
const navMotion = {
  // initial state - hidden
  hidden: {
    y: '100%',
    opacity: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15,
      ease: 'easeInOut',
    },
  },
  // active state - visible
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.15,
      ease: 'easeInOut',
    },
  },
  // exit state - exit
  exit: {
    y: '100%',
    opacity: 0,
    transition: {
      duration: 0.5,
      when: 'afterChildren',
      staggerChildren: 0.15,
      staggerDirection: -1,
      ease: 'easeInOut',
    },
  },
};

// nav item variant
const navItemMotion = {
  // initial state - hidden
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  // active state - visible
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  // exit state - exit
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

console.log('navbar without context being used');

const Nav = () => {
  // media query hook
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  // hamburger menu toggle state
  const [toggled, setToggled] = useState<boolean>(false);
  // state for background change on scroll
  const [scrollBackground, setScrollBackground] = useState<boolean>(false);

  // change background function
  const changeBackground = () => {
    if (window.scrollY > 50) {
      setScrollBackground(true);
    } else {
      setScrollBackground(false);
    }
  };
  // event listener for scroll
  window.addEventListener('scroll', changeBackground);

  // useEffect for preventing scroll when nav is toggled
  useEffect(() => {
    if (toggled) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [toggled]);

  return (
    <nav
      className={
        scrollBackground
          ? 'bg-white h-14 w-[calc(100%-2rem)] fixed top-0 left-4 z-10 flex items-center justify-between p-8 font-medium my-2 transition ease-in-out duration-200 shadow-custom shadow-primary-green'
          : 'bg-white h-14 w-[calc(100%-2rem)] fixed top-0 left-4 z-10 flex items-center justify-between p-8 font-medium my-2 transition ease-in-out duration-200'
      }
    >
      {/* navbar if desktop */}
      {isDesktop && (
        <>
          <Link to='home' duration={0} smooth={true} className='cursor-pointer'>
            <div className='flex items-center justify-center'>
              <img src={NSLogo} alt='NeuroSynth Logo' className='w-12' />
              <div className='flex flex-col justify-center -mx-2 leading-4'>
                <h1 className='font-black text-primary-green'>Neurosynth</h1>
                <h1 className='font-normal'>Dynamics</h1>
              </div>
            </div>
          </Link>
          <div className='flex items-center gap-4 text-sm'>
            <Link
              to='about'
              duration={0}
              smooth={true}
              className='cursor-pointer text-base hover:text-primary-green transition duration-200'
            >
              Learn More
            </Link>
            <Link to='contact' duration={0} smooth={true} className=''>
              <button className='bg-primary-green text-white hover:bg-green-700 px-3.5 py-2.5 shadow-custom shadow-primary-green transition duration-200'>
                Contact Us
              </button>
            </Link>
          </div>
        </>
      )}

      {/* navbar for tablet and below */}
      {/* hamburger icon */}
      {!isDesktop && (
        <div className='flex items-center justify-between w-full'>
          <Link
            to='home'
            smooth={true}
            duration={0}
            className='cursor-pointer'
            onClick={() => setToggled(false)}
          >
            <div className='flex items-center justify-center'>
              <img src={NSLogo} alt='NeuroSynth Logo' className='w-12' />
              <div className='flex flex-col justify-center -mx-2 leading-4'>
                <h1 className='font-black text-primary-green'>Neurosynth</h1>
                <h1 className='font-normal'>Dynamics</h1>
              </div>
            </div>
          </Link>
          <div
            onClick={() => setToggled((prevToggled) => !prevToggled)}
            className='space-y-1.5 cursor-pointer z-50'
          >
            <motion.span
              animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
              className='block h-0.5 w-8 bg-black'
            ></motion.span>
            <motion.span
              animate={{ scale: toggled ? 0 : 1 }}
              className='block h-0.5 w-8 bg-black'
            ></motion.span>
            <motion.span
              animate={{
                rotateZ: toggled ? -45 : 0,
                y: toggled ? -8 : 0,
              }}
              className='block h-0.5 w-8 bg-black'
            ></motion.span>
          </div>
        </div>
      )}

      {/* hamburger menu */}
      <AnimatePresence>
        {/* nav container */}
        {toggled && !isDesktop && (
          <motion.div
            variants={navMotion}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='fixed top-[80px] left-4 w-[calc(100%-2rem)] h-screen flex items-center justify-center z-10 shadow-custom shadow-primary-green bg-white outline-primary-green'
          >
            {/* nav links container */}
            <div className='flex flex-col items-center justify-center gap-12 h-full'>
              <motion.div variants={navItemMotion}>
                <Link
                  to='about'
                  smooth={true}
                  className='cursor-pointer text-2xl sm:text-4xl'
                  onClick={() => setToggled(false)}
                >
                  Learn More
                </Link>
              </motion.div>
              <motion.div variants={navItemMotion}>
                <Link
                  to='contact'
                  smooth={true}
                  onClick={() => setToggled(false)}
                >
                  <button className='bg-primary-green text-white hover:bg-green-700 px-3.5 py-2.5 sm:p-4 shadow-custom shadow-primary-green transition duration-200 text-2xl sm:text-4xl'>
                    Join Trial
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
