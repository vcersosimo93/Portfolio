import React from "react";

const Navlinks = () => {
    return (
        <ul className="flex items-center list-none">
            <li className="mr-40">
                <a href="#about" className="text-orange-50 font-semibold text-2xl hover:text-gray-300">About</a>
            </li>
            <li className="mr-40">
                <a href="#projects" className="text-orange-50 font-semibold text-2xl hover:text-gray-300">Projects</a>
            </li>
            <li className="">
                <a href="#contact" className="text-orange-50 font-semibold text-2xl hover:text-gray-300">Contact</a>
            </li>
        </ul>
    );
};

export default Navlinks;
