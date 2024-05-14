import React from 'react';
import Navbar from "./navbar/Navbar";

function Header() {
  return (
    <div className='flex justify-between items-center'>
      <div className='p-2'>
        <div className='flex items-center justify-center'>
          <h1 className='lg:text-5xl md:text-4xl sm:text-3xl lg:pl-20 text-amber-50 font-thin font-sans'>
            vC.
          </h1>
        </div>
      </div>
      <div className='p-2 '>
        <Navbar />
      </div>
    </div>
  );
}

export default Header;