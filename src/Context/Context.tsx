import {
  createContext,
  useState,
  useContext,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';

// interface navbar context props
interface NavbarContextProps {
  toggled: boolean;
  setToggled: Dispatch<SetStateAction<boolean>>;
  scrollBackground: boolean;
  setScrollBackground: Dispatch<SetStateAction<boolean>>;
}

//   // media query hook
//   const isDesktop = useMediaQuery('(min-width: 1024px)');
//   // hamburger menu toggle state
//   const [toggled, setToggled] = useState<boolean>(false);
//   // state for background change on scroll
//   const [scrollBackground, setScrollBackground] = useState<boolean>(false);

//   // change background function
//   const changeBackground = () => {
//     if (window.scrollY > 50) {
//       setScrollBackground(true);
//     } else {
//       setScrollBackground(false);
//     }
//   };
//   // event listener for scroll
//   window.addEventListener('scroll', changeBackground);

//   // useEffect for preventing scroll when nav is toggled
//   useEffect(() => {
//     if (toggled) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
//   }, [toggled]);
