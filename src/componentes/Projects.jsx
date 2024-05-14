import React from "react";
import decemberLabs from "../imagenes/decemberLabsProject.png";
import valora from "../imagenes/valoraProject.png";

function Projects() {
  return (
    <div className="flex justify-center flex-col items-center mb-10 font-sans text-amber-50 lg:min-h-screen lg:mt-0 md:mt-20 sm:mt-20">
      <h2 className="text-center font-semibold sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-3xl  xl:mt-0 lg:mt-0 mt-10">
        Projects
      </h2>
      <p className="text-center font-sans font-extralight   sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl text-xl mb-8">
        Here are a few projects I've worked on recently
      </p>
      <div className="w-full max-w-screen-lg flex flex-col lg:flex-row justify-between">
        
        <div className="mb-8 lg:mb-0 lg:mr-2 lg:pb-2 w-full lg:w-1/2 rounded-lg shadow-md bg-gray-900 bg-opacity-40 hover:bg-opacity-20">
          <h3 className="mb-2 text-center sm:text-xl md:text-xl xl:text-xl">December Labs</h3>
          <div className="flex flex-col items-center">
            <img
              src={decemberLabs}
              alt="December Labs"
              className="mb-5 w-64 sm:w-80 h-auto object-cover rounded-2xl"
            />
            <p className="text-sm text-center px-4">
            This project involved creating an internal app for employee meal sign-ups within the company. 
            It allowed employees to schedule their lunchtime and place orders for food from the company cafeteria/restaurant. 
            Developed using Node.js and React.js, the solution streamlined the process efficiently. 
            MySQL was employed for database management.</p>
            <div className="flex items-center justify-center mt-4">
              <a
                className="w-20 h-10 sm:mt-10 md:mt-10 xl:mt-10 flex items-center justify-center text-center font-sans font-semibold rounded-lg bg-amber-50 text-gray-950 border border-amber-50 hover:bg-transparent hover:text-amber-50"
                href="https://github.com/vcersosimo93/FinalProjectDL-NodeJs-React-TypeOrm"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mb-8 lg:mb-0 lg:pb-2  lg:ml-2 w-full lg:w-1/2 rounded-lg shadow-md bg-gray-900 bg-opacity-40 hover:bg-opacity-20">
          <h3 className="sm:text-xl md:text-xl xl:text-xl mb-2 text-center">Valora Consultora</h3>
          <div className="flex flex-col items-center">
            <img
              src={valora}
              alt="Valora Consultora"
              className="mb-20 w-64 mt-20 sm:w-80 h-auto object-cover rounded-lg"
            />
            <p className="text-sm text-center px-4">
            This ongoing project entails the development of an internal application for employees at Valora Consultora. 
            The primary goal of the app is to streamline their workflow and facilitate the creation of valuations directly within the platform. 
            By leveraging Spring Boot and React.js, we aim to deliver a solution that enhances efficiency and simplifies processes. 
            MongoDB serves as the database for seamless data management. 
            Our objective is to provide a user-friendly, fast, and effective workflow experience for all users.</p>
            <div className="flex items-center justify-center mt-4">
              <a
                className="w-20 h-10 flex items-center justify-center text-center font-sans font-semibold rounded-lg bg-amber-50 text-gray-950 border border-amber-50 hover:bg-transparent hover:text-amber-50"
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
