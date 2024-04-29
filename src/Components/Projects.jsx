import { motion } from "framer-motion";
import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <>
      <div
        className="about w-full px-20 py-10 bg-zinc-800 text-zinc-800"
      >
        <div className="heading">
          <h1 className="text-3xl text-zinc-200  max-md:text-3xl uppercase max-lg:text-center font-extrabold leading-none tracking-tighter">
            PROJECTS
          </h1>
        </div>
        <ProjectData />
      </div>
    </>
  );
}

function ProjectData() {
  return (
    <div className="main w-full py-10 grid grid-cols-2 gap-6 max-md:grid-cols-1">
      {projectdata.map((pdata, index) => (
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ ease: [0.5, 1, 0.89, 1], duration: 0.8 }}
          key={pdata.id}
          className="rounded-xl projects w-full overflow-hidden shadow-xl "
        >
          <img
            src={pdata.img}
            alt=""
            className=" duration-300 hover:brightness-[0.6]"
          />
          <div className="bg-zinc-200 w-full px-2 py-4 flex justify-between">
            <div className="px-4">
              <h1 className="text-2xl font-extrabold">{pdata.title}</h1>
            </div>
            <div className="flex gap-2 px-4 items-center">
              <span className="text-2xl hover:scale-105 duration-300 shadow-xl">
                <a
                  href={pdata.projecturl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </span>
              <span className="text-2xl hover:scale-105 duration-300 shadow-xl">
                <a
                  href={pdata.liveurl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPlayCircle />
                </a>
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

const projectdata = [
  {
    id: 1,
    title: "Glasses Website",
    liveurl: "https://thezaidushaikh.github.io/project.github.io/",
    projecturl: "https://github.com/thezaidushaikh/project.github.io",
    img: "./images/project1.png",
  },
  {
    id: 2,
    title: "AI Landing Page",
    liveurl: "https://thezaidushaikh.github.io/AILandingPage.github.io/",
    projecturl: "https://github.com/thezaidushaikh/AILandingPage.github.io",
    img: "./images/project2.png",
  },
  {
    id: 3,
    title: "Image 3",
    liveurl: "https://github.com/ShaikhZaidu",
    projecturl: "https://github.com/ShaikhZaidu",
    img: "./images/project3.png",
  },
  {
    id: 4,
    title: "Image 4",
    liveurl: "https://github.com/ShaikhZaidu",
    projecturl: "https://github.com/ShaikhZaidu",
    img: "./images/project4.png",
  },
];

export default Projects;
