import React from 'react';
import FotoTopaz from '../imagenes/FotoTopaz.jpeg'

function Main() {
  return (
    <div  id="about" className="bg-gray-900 flex justify-center items-center h-screen">
      <div className=" bg-slate-500  w-1/2 p-8 rounded-lg shadow-lg text-emerald-50"> 
        <h2 className="text-xl font-bold mb-4">Hi! My name is Vicente Cersósimo</h2>
        <p className="">
          Java Developer with over 6 years of experience in the technology industry and 2.5 years of experience in development. I am also graduated from Universidad Católica del Uruguay with a Bachelor's degree in Business Administration and a Systems degree from ORT University.
          Tech Skills: Java (2.5y), React Js (1.5y), Node Js (1y), SQL (3), Sping Boot (1y)
          GitHub : <a href="https://github.com/vcersosimo93" className="text-beige hover:text-skyblue"> {/* Usa la clase text-beige para cambiar el color del enlace a beige */}
            https://github.com/vcersosimo93
          </a>
        </p>
      </div>
      <div className="w-1/6 h-1/1 ml-8 rounded-full overflow-hidden">
        <img src={FotoTopaz} alt="Foto de perfil" className="w-full h-full object-cover rounded-full" />
      </div>
    </div>
  );
}

export default Main;
