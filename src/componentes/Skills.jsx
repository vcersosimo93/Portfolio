import React from "react";
import { motion } from "framer-motion";
import { techStack } from "../constants.js";

function Skills() {
  return (
    <div className="flex justify-center flex-col items-center lg:min-h-screen" id="skills">
      <h2 className="text-center text-amber-50 font-sans font-semibold sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-3xl mb-8">
        Technologies and Tools
      </h2>
      <div>
        <motion.div className={`mt-8 flex flex-wrap justify-between ${window.innerWidth <= 640 ? 'pb-20' : ''}`}>
          {techStack.map((el, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView={"visible"}
              variants={{
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                  },
                },
                hidden: { opacity: 1, y: 80 },
              }}
              className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
            >
              <img alt="" src={el.link} className="w-12" />
              <h4 className="text-md ml-4">{el.name}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
