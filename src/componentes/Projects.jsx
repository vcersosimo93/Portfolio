import React from "react";
import decemberLabs from "../imagenes/decemberLabsProject.png";
import valora from "../imagenes/valoraProject.png";

function Projects() {
  return (
    <div className="flex justify-center flex-col items-center mb-10 font-sans text-amber-50">
      <h2 className="text-center  font-sans font-semibold text-4xl mb-8">
        Projects
      </h2>
      <p className="text-center font-sans font-extralight text-2xl mb-8">
        Here are a few projects I've worked on recently
      </p>
      <div className="flex justify-between w-full max-w-screen-lg">
        <div className="mr-5 w-1/2 rounded-lg shadow-md p-4 bg-gray-900 bg-opacity-40 hover:bg-opacity-20">
          <h3 className="text-xl mb-2 text-center ">
            December Labs
          </h3>
          <div className="flex flex-col items-center">
            <img
              src={decemberLabs}
              alt="December Labs"
              className="mb-5 w-80 h-60 mx-auto object-cover rounded-2xl"
            />
            <p className="text-sm text-center ">
              Este proyecto consistió en armar una app para el uso interno de la
              compañía, para que tengan la posibilidad de anotarse para el
              servicio de comidas de la empresa. Esta aplicación fue desarrollada
              con NodeJs y ReactJs. En cuanto a base de datos utilizamos MySql.
            </p>
            <div className="flex items-center justify-center">
              <a
                className="w-20 h-10 mt-4 flex items-center justify-center text-center font-sans font-semibold rounded-lg bg-amber-50 text-gray-950 border border-amber-50 hover:bg-transparent hover:text-amber-50"
                href="https://github.com/vcersosimo93/FinalProjectDL-NodeJs-React-TypeOrm"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="mr-5 w-1/2 rounded-lg shadow-md p-4 bg-gray-900 bg-opacity-40 hover:bg-opacity-20">
          <h3 className="text-xl mb-2 text-center font-sans ">
            Valora Consultora
          </h3>
          <div className="flex flex-col  items-center">
            
            <img
              src={valora}
              alt="Valora Consultora"
              className="mb-28 mt-20 w-80 h-auto bg-slate-100 object-cover rounded-xl"
            />
            
            <p className="text-sm text-center  font-sans">
              Este proyecto consistió en armar una app para el uso interno de la
              compañía, para que tengan la posibilidad de anotarse para el
              servicio de comidas de la empresa. Esta aplicación fue desarrollada
              con NodeJs y ReactJs. En cuanto a base de datos utilizamos MySql.
            </p>
            <div className="flex items-center justify-center">
              <a
                className="w-20 h-10 mt-4 flex items-center justify-center text-center font-sans font-semibold rounded-lg bg-amber-50 text-gray-950 border border-amber-50 hover:bg-transparent hover:text-amber-50"
                href="https://github.com/vcersosimo93/Valora"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Projects;
