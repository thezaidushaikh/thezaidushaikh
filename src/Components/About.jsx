import { motion } from "framer-motion";
import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

function About() {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="0.00001"
        className="w-full  px-20 py-5 rounded-t-xl flex gap-2 bg-zinc-200 text-zinc-800 max-lg:flex-col max-lg:items-center max-lg:px-2 "
      >
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ ease: [0.5, 1, 0.89, 1], duration: 0.8 }}
          className="  image w-1/2 p-10 flex items-center justify-center h-[35vw] max-lg:p-0 "
        >
          <img src="./images/img1.png" className="w-full" />
        </motion.div>
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ ease: [0.5, 1, 0.89, 1], duration: 0.8 }}
          className="about  p-5 md:p-10 md:w-[100%]  flex flex-col gap-2 items-center justify-center max-lg:p-0 max-lg:py-5"
        >
          <div className="heading w-full px-5 md:px-10 py-1">
            <h1 className="text-3xl  max-md:text-3xl uppercase max-lg:text-center font-extrabold leading-none tracking-tighter">
              ABOUT ME
            </h1>
          </div>
          <div className="paragraph w-full px-5 md:px-10 py-1">
            <p className="max-lg:text-center font-normal leading-snug tracking-normal text-zinc-600 ">
              Hi, I'm <strong>Zaid Shaikh!</strong> I bring websites to life as
              a Front-end Developer. I'm passionate about crafting modern
              websites that look fantastic on any device and use cool animations
              to engage visitors. I use languages and library like HTML, CSS, JavaScript
              and React JS to build these experiences, and popular frameworks
              like Tailwind CSS and Bootstrap. With over 2 years of experience through 
              personal and group projects. Outside of code, I love exploring new places on Google Earth.
            </p>
          </div>
          <div className="social flex flex-row gap-2 w-full max-lg:justify-center px-5 md:px-10 py-3 md:py-5">
            <SocialLinks />
          </div>
        </motion.div>
      </div>
      <div className="w-full grid grid-cols-3 max-lg:grid-cols-1 justify-items-start gap-4 tracking-wider border-t-[1px] border-zinc-800 bg-zinc-200 text-zinc-800  px-20 py-5">
        <p className="p-1 px-3  shadow-md border-[1px] border-zinc-800 tracking-tight rounded-full">
          +92 310 4982608
        </p>
        <p className="p-1 px-3  shadow-md border-[1px] border-zinc-800 tracking-tight rounded-full">
          zaidus800@gmail.com
        </p>
        <p className="p-1 px-3  shadow-md border-[1px] border-zinc-800 tracking-tight rounded-full">
          PCSIR Society Karachi, Pakistan
        </p>
      </div>
    </>
  );
}

function SocialLinks() {
  return (
    <div className="text-2xl flex gap-2 max-lg:items-center max-sm:text-xl">
      {socialLinks.map(({ Icon, link }, index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="duration-300 hover:scale-105 shadow-md hover:text-zinc-200 hover:bg-zinc-800 p-3 rounded-full border-[2px] border-zinc-800"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}

const socialLinks = [
  { Icon: FaLinkedinIn, link: "https://www.linkedin.com/in/thezaidushaikh/" },
  { Icon: FaGithub, link: "https://github.com/thezaidushaikh" },
  {
    Icon: FaFacebook,
    link: "https://www.facebook.com/profile.php?id=100080672212697",
  },
  { Icon: FaInstagram, link: "https://www.instagram.com/thezaidushaikh/" },
  { Icon: FaXTwitter, link: "https://twitter.com/thezaidushaikh" },
];
export default About;
