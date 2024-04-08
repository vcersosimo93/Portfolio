import Image from "next/image";
import Intro from "@/src/componentes/intro";
import Header from "@/src/componentes/header";
import Sidebar from "@/src/componentes/sideBar";

const Page = () => {
  return (
    <div>
      <Sidebar />
      <h1>Contenido de la página</h1>
      <p>Este es el contenido de tu página.</p>
    </div>
  );
};

export default Page;
