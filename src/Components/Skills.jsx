import { motion } from "framer-motion";
import React from "react";

function Skills() {
  return (
    <>
      <div className="main w-full px-20  py-10 bg-zinc-200 text-zinc-800">
        <div className="heading">
          <h1 className="text-3xl  max-md:text-3xl uppercase max-lg:text-center font-extrabold leading-none tracking-tighter">
            SKILLS
          </h1>
        </div>
        <SkillsData />
      </div>
    </>
  );
}

function SkillsData() {
  return (
    <div className="w-full py-10  gap-4 grid grid-cols-4 max-md:grid-cols-3 justify-items-center max-sm:grid-cols-2">
      {skillsdata.map((sdata, index) => (
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ ease: [0.5, 1, 0.89, 1], duration: 0.8 }}
          key={sdata.id}
          title={sdata.title}
          className="skills border-[2px] border-zinc-800 duration-300 hover:bg-zinc-300 p-6 w-40 max-sm:w-24 rounded-full overflow-hidden shadow-xl"
        >
          <img src={sdata.img} className="hover:scale-105 duration-300" />
        </motion.div>
      ))}
    </div>
  );
}

const skillsdata = [
  {
    id: 1,
    title: "HTML",
    img: "./images/htmllogo.png",
  },
  {
    id: 2,
    title: "CSS",
    img: "./images/csslogo.png",
  },
  {
    id: 3,
    title: "JS",
    img: "./images/jslogo.png",
  },
  {
    id: 4,
    title: "REACT",
    img: "./images/reactlogo.png",
  },
  {
    id: 5,
    title: "TAILWIND",
    img: "./images/tailwind-css.png",
  },
  {
    id: 6,
    title: "BOOTSTRAP",
    img: "./images/bootstraplogo.png",
  },
  {
    id: 7,
    title: "GIT",
    img: "./images/gitlogo.png",
  },
  {
    id: 8,
    title: "GITHUB",
    img: "./images/githublogo.png",
  },
  {
    id: 9,
    title: "PHOTOSHOP",
    img: "./images/pslogo.png",
  },
  {
    id: 10,
    title: "ILLUSTRATER",
    img: "./images/ailogo.png",
  },
  {
    id: 11,
    title: "FIGMA",
    img: "./images/figmalogo.png",
  },
  {
    id: 12,
    title: "CANVA",
    img: "./images/canvalogo.png",
  },
];
export default Skills;
