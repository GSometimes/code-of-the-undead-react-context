import Sections from './pages/Sections';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { NavProvider } from './Context/Context';

function App() {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      <NavProvider>
        <Sections />
      </NavProvider>
    </>
  );
}

export default App;
