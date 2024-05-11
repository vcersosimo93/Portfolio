import React from "react";
import { NavLink } from "react-router-dom";

const Navlinks = () => {
    return (
        <ul className="flex items-center list-none">
            <li className="mr-40">
                <NavLink to="/" className="text-orange-50 font-semibold text-2xl hover:text-gray-300">About</NavLink>
            </li>
            <li className="mr-40">
                <NavLink to="/about" className="text-orange-50 font-semibold text-2xl hover:text-gray-300">Projects</NavLink>
            </li>
            <li className="">
                <NavLink to="/contact" className="text-orange-50 font-semibold text-2xl hover:text-gray-300">Contact</NavLink>
            </li>
        </ul>
    );
};

export default Navlinks;
