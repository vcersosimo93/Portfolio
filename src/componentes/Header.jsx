import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./navbar/Navbar";

function Header() {
  return (
      <div className='bg-gray-900 flex justify-center'>
        <div className="bg-gray-900 shadow-md ">
          <div className="container mx-auto py-4">
            <Navbar />
          </div>
        </div>
      </div>
  );
}

export default Header;