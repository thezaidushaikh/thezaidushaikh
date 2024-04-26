import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div
      className={`fixed z-[999] w-full px-20 py-5 flex justify-center bg-zinc-800 text-zinc-200 transition-transform duration-300 ${
        visible ? "transform translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="links flex gap-10 max-sm:gap-5">
        {["Home", "About", "Projects", "Skills"].map(
          (item, index) => (
            <a
              key={index}
              href=""
              className="text-[2.3vh] font-light cursor-pointer max-sm:text-[2vh] "
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
