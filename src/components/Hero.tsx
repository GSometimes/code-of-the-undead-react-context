import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div id='home' className='min-h-screen flex items-center justify-center'>
      <div className='px-4'>
        <h1
          data-aos-once='true'
          data-aos='fade-up'
          data-aos-duration='500'
          className='text-primary-green text-5xl font-bold tracking-widest sm:text-7xl md:text-8xl'
        >
          Neurosynth
        </h1>
        <h1
          data-aos='fade-up'
          data-aos-duration='500'
          data-aos-delay='50'
          data-aos-once='true'
          className='text-5xl tracking-widest sm:text-7xl md:text-8xl'
        >
          Dynamics
        </h1>
        <p
          data-aos='fade-up'
          data-aos-duration='500'
          data-aos-delay='100'
          data-aos-once='true'
          className='mt-4 font-bold text-xl sm:text-2xl tracking-widest '
        >
          Engineering Evolution, Beyond Imagination
        </p>
        <div className='flex items-center gap-4 mt-4'>
          <Link
            to='contact'
            smooth={true}
            duration={0}
            className='cursor-pointer'
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay='150'
            data-aos-once='true'
          >
            <button className='bg-primary-green text-white text-xl hover:bg-green-700 px-3.5 py-2.5 shadow-custom shadow-primary-green transition duration-200'>
              Join Trial
            </button>
          </Link>
          <Link
            to='about'
            smooth={true}
            duration={0}
            className='cursor-pointer'
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay='200'
            data-aos-once='true'
          >
            <button className='text-xl font-semibold leading-6 hover:text-primary-green transition duration-200'>
              Learn more <span aria-hidden='true'>→</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
