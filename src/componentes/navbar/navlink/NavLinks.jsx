import React from "react";

const Navlinks = () => {
  return (
    <ul className="flex flex-wrap justify-center ">
      <li className="mr-4 lg:mr-8">
        <a
          href="#about"
          className="text-orange-50 font-sans lg:text-2xl md:text-2xl sm:text-1xl hover:border-b-2 border-gray-300"
        >
          Home
        </a>
      </li>
      <li className="mr-4 lg:mr-8">
        <a
          href="#projects"
          className="text-orange-50 font-sans lg:text-2xl md:text-2xl sm:text-1xl hover:border-b-2 border-gray-300"
        >
          Projects
        </a>
      </li>
      <li className="mr-4 lg:mr-8">
        <a
          href="#skills"
          className="text-orange-50 font-sans lg:text-2xl md:text-2xl sm:text-1xl hover:border-b-2 border-gray-300"
        >
          Tech & Tools
        </a>
      </li>
      <li className="mr-4 lg:mr-8">
        <a
          href="#contact"
          className="text-orange-50 font-sans lg:text-2xl md:text-2xl sm:text-1xl hover:border-b-2 border-gray-300"
        >
          Contact
        </a>
      </li>
      
    </ul>
  );
};

export default Navlinks;
