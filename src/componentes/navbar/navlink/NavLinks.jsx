import React from "react";

const Navlinks = () => {
    return (
        <ul className="flex ">
            <li className="mr-32 ">
                <a href="#about" className="text-orange-50 font-sans text-2xl  hover:border-b-2 border-gray-300">About</a>
            </li>
            <li className="mr-32">
                <a href="#projects" className="text-orange-50 font-sans text-2xl  hover:border-b-2 border-gray-300">Projects</a>
            </li>
            <li className="mr-32">
                <a href="#contact" className="text-orange-50 font-sans text-2xl  hover:border-b-2 border-gray-300">Contact</a>
            </li>
        </ul>
    );
};

export default Navlinks;
