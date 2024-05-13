import React from "react";
import FotoTopaz from "../imagenes/FotoTopaz.jpeg";
import fondo from "../imagenes/fondo.jpg";
import Header from "./Header.jsx";
import Projects from "./Projects";
import resume from "../documents/VicenteCersosimoCV.pdf";
import ContactMe from "./ContactMe";
import { IoLogoGithub } from "react-icons/io";
import { BiLogoLinkedin } from "react-icons/bi";

function Main() {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <img
          src={fondo}
          alt="Foto de perfil"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative">
        <Header />
        <div
          id="about"
          className="flex justify-center items-center min-h-screen"
        >
          <div className="w-1/2 h-60 ">
            <p className=" text-5xl text-amber-50  font-sans font-semibold">
              Hi There!
            </p>
            <p className="pt-5 text-5xl text-amber-50  font-sans font-semibold">
              I'm Vicente Cersósimo
            </p>
            <p className="pt-5 mb-10 text-5xl text-amber-50  font-sans font-semibold">
              Software Developer
            </p>
            <a
              href={resume}
              download="Vicente Cersósimo CV"
              className="px-4 mr-5 py-2 text-white font-sans font-semibold rounded-lg border border-amber-50 hover:bg-amber-50 hover:text-gray-950"
            >
              Download CV
            </a>
            <a
              href="#contactMe"
              className="px-4 py-2 text-white font-sans font-semibold rounded-lg border border-amber-50 hover:bg-amber-50 hover:text-gray-950"
            >
              Contact Me
            </a>

            <div className="p-2 mt-5  flex justify-start">
              <a href={"https://github.com/vcersosimo93"}>
                <IoLogoGithub
                  className="bg-amber-50 p-3 mr-5 rounded-full hover:bg-amber-50 hover:scale-125  duration-300  "
                  size={48}
                />
              </a>

              <a href={"https://www.linkedin.com/in/vicentecersosimo/"}>
                <BiLogoLinkedin
                  className="bg-amber-50 p-3 rounded-full  transition-all text-gray-800 cursor-pointer hover:bg-amber-50 hover:scale-125  duration-300  "
                  size={48}
                />
              </a>
            </div>
          </div>
          <div className="w-1/6 bg-black h-1/1 ml-8 rounded-full overflow-hidden">
            <img
              src={FotoTopaz}
              alt="Foto de perfil"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contactMe">
          <ContactMe />
        </div>
      </div>
    </div>
  );
}

export default Main;
