import React from 'react';
import Navbar from "./navbar/Navbar";

function Header() {
  return (
    <div className='flex justify-between'>
    <div className=' w-1/2 p-2'>
    <div className=' w-1/2 flex items-center justify-center '>
      <h1 className='text-5xl  text-amber-50  font-thin  font-sans'>
        vC.
      </h1>
      
      </div>
    </div>

    <div className=' w-1/2 pt-3'>
      <Navbar />
    </div>
  </div>
  );
}

export default Header;