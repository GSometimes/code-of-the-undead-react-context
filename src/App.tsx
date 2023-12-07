import Sections from './pages/Sections';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      <Sections />
    </>
  );
}

export default App;
