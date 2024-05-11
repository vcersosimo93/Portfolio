import React from "react";
import Navlinks from "./navlink/NavLinks";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 ">
      <div className="container mx-auto">
        <Navlinks />
      </div>
    </nav>
  );
};

export default Navbar;
