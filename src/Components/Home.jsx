import { motion } from "framer-motion";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";

function Home() {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.4"
        className=" w-full bg-zinc-800  p-20 flex gap-2 items-start text-zinc-200"
      >
        <div className=" textstructure w-1/2 flex items-center justify-center h-[35vw] md:w-[50vw] sm:w-[60vw] max-sm:w-[80vw] max-sm:text-center">
          <div className="masker">
            <motion.h1
              initial={{ x: -1000 }}
              animate={{ x: 1 }}
              transition={{ ease: [0.5, 1, 0.89, 1], duration: 0.5 }}
              className="text-zinc-400 text-[5vw] font-bold tracking-tighter max-sm:text-[6vw] leading-8"
            >
              I'm a
            </motion.h1>
            <motion.h1
              initial={{ x: -1000 }}
              animate={{ x: 1 }}
              transition={{ ease: [0.5, 1, 0.89, 1], duration: 0.6 }}
              className="text-[7vw] uppercase font-extrabold max-sm:text-[10vw] leading-[1] "
            >
              Front-end
            </motion.h1>
            <motion.h1
              initial={{ x: -1000 }}
              animate={{ x: 1 }}
              transition={{ ease: [0.5, 1, 0.89, 1], duration: 0.7 }}
              className="text-[7vw] uppercase font-extrabold max-sm:text-[10vw] leading-[0.5] "
            >
              Developer
            </motion.h1>
            <motion.div
              initial={{ x: -1000 }}
              animate={{ x: 1 }}
              transition={{ ease: [0.5, 1, 0.89, 1], duration: 0.8 }}
              className="hirebutton flex mt-6 ml-1.5 max-sm:justify-center"
            >
              <a href="./doc/ZaidShaikhCV.pdf" download={"Zaid's CV.pdf"}>
                <div className="bg-zinc-200 text-zinc-800 rounded-full p-2 flex gap-3 items-center w-10 hover:w-20 duration-300 overflow-hidden">
                  <span className="rotate-90 text-xl ml-[0.2vw] ">
                    <IoMdArrowForward />
                  </span>
                  <h1 className="font-semibold">CV</h1>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
        <div className="image w-1/2 pl-10 flex items-center justify-center h-[35vw] max-md:p-0 max-sm:hidden">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: [0.5, 1, 0.89, 1], duration: 1.5 }}
            src="./images/img1.png"
            className="w-[35vw]"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
