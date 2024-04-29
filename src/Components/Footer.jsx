import React from "react";

function Footer() {
  return (
    <>
      <div className="footer grid grid-cols-3 max-sm:grid-cols-1 gap-4 w-full px-20 py-10 bg-zinc-800 text-zinc-200">
        {/* <div className="quicklinks  w-full">
          <div className="qheading">
            <h1 className="text-lg font-normal">LINKS</h1>
            <div className="links grid w-1 font-light text-zinc-300 tracking-widest">
              <a
                href=""
                className="leading-relaxed duration-300 hover:underline "
              >
                Home
              </a>
              <a
                href=""
                className="leading-relaxed duration-300 hover:underline "
              >
                About
              </a>
              <a
                href=""
                className="leading-relaxed duration-300 hover:underline "
              >
                Projects
              </a>
              <a
                href=""
                className="leading-relaxed duration-300 hover:underline "
              >
                Skills
              </a>
            </div>
          </div>
        </div> */}
        <div className="slinks  w-full">
          <div className="qheading">
            <h1 className="text-lg font-normal">SOCIALS</h1>
            <div className="links grid w-1 font-light text-zinc-300 tracking-widest">
              <a
                href="https://www.linkedin.com/in/thezaidushaikh/"
                className="leading-relaxed duration-300 hover:underline "
                target="_blank"
              >
                Linkedin
              </a>
              <a
                href="https://github.com/thezaidushaikh"
                className="leading-relaxed duration-300 hover:underline "
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100080672212697"
                className="leading-relaxed duration-300 hover:underline "
                target="_blank"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/thezaidushaikh/"
                className="leading-relaxed duration-300 hover:underline "
                target="_blank"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com/thezaidushaikh"
                className="leading-relaxed duration-300 hover:underline "
                target="_blank"
              >
                Twitter/X
              </a>
            </div>
          </div>
        </div>
        <div className="contact  w-full">
          <div className="qheading ">
            <h1 className="text-lg font-normal">CONTACT</h1>
            <div className="links grid w-32 font-light text-zinc-300 tracking-widest ">
              <a href="#" className="leading-relaxed cursor-default">
                +92 310 4982608
              </a>
              <a href="#" className="leading-loose cursor-default">
                zaidus800@gmail.com
              </a>
              <a href="" className="leading-tight cursor-default">
                PCSIR Society Sch-33 Gulzar-e-Hijri Karachi, Pakistan
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
