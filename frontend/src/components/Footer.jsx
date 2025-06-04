import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
//     

    <div className='md:mx-10'> 
      <div className='flex flex-col  sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'> 
      {/* <div className='flex sm:grid grid-cols-3 gap-14 my-10 mt-40 text-sm'>  */}

        {/* left-section */}
        <div className='w-full '>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora cupiditate enim architecto cumque ipsa? Magni cum quas quidem labore iusto obcaecati vero iure sequi incidunt ducimus porro, aliquam minus autem.</p> {/* 8 */}
        </div> 

        {/* middle-section */}
        <div className='flex flex-col '> 
          <p className='text-xl font-medium mb-5'>COMPANY</p> 
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li> 
            <li>About us</li> 
            <li>Contact us</li> 
            <li>Privacy policy</li> 
          </ul> 
        </div> 

        {/* right-section */}
        <div className='flex flex-col'>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p> 
          <ul className='flex flex-col gap-2 text-gray-600'> 
            <li>+1-212-456-7890</li> 
            <li>yuviraj1107@gmail.com</li>
          </ul> 
        </div> 

      </div>

      {/* copyright section */}
      <div className='text-center'> 
        <hr /> 
        <p className='py-5 text-sm'>Copyright 2024@ Prescripto-all Right Reserved.</p> {/* 29 */}
      </div>
    </div> 
  );
};

export default Footer;
