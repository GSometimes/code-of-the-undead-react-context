import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='min-h-screen flex items-center justify-center'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-4xl font-bold tracking-tight text-primary-green sm:text-6xl'>
            Contact Us
          </h2>
          <p className='mt-6 text-lg leading-8'>
            Embrace the frontier of innovation with us—where biotech and pharma
            brilliance converge to redefine tomorrow.
          </p>
          <p className='mt-4 text-lg leading-8'>
            For general inquiries, please email us at
            <span className='font-bold text-primary-green'>
              info@neurosynthdynamics.com
            </span>
            .
          </p>
          <p className='mt-4 text-lg leading-8'>
            For support, please contact
            <span className='font-bold text-primary-green'>
              support@neurosynthdynamics.com
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
