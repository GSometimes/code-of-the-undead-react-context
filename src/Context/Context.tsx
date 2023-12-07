import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  ReactNode,
  useMemo,
} from 'react';
import { useMediaQuery } from '../utils/useMediaQuery';

// interface navbar context props
export type NavbarContextProps = {
  isDesktop: boolean;
  toggled: boolean;
  setToggled: Dispatch<SetStateAction<boolean>>;
  scrollBackground: boolean;
  setScrollBackground: Dispatch<SetStateAction<boolean>>;
};

// interface context provider props
export interface ContextProviderProps {
  children: ReactNode;
}

// create context
export const NavbarContext = createContext<NavbarContextProps>(
  {} as NavbarContextProps
);

export const NavProvider = ({ children }: ContextProviderProps) => {
  // media query hook
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  // hamburger menu toggle state
  const [toggled, setToggled] = useState<boolean>(false);
  // background change on scroll state
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

  const acceptedValue = useMemo(
    () => ({
      isDesktop,
      toggled,
      setToggled,
      scrollBackground,
      setScrollBackground,
    }),
    [isDesktop, toggled, setToggled, scrollBackground, setScrollBackground]
  );

  return (
    <NavbarContext.Provider value={acceptedValue}>
      {children}
    </NavbarContext.Provider>
  );
};
