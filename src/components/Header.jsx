import React from "react";

import { FaGithub } from "react-icons/fa";

function Header() {
  return (
    <>
      <header className="my-6 flex justify-center lg:justify-between items-center w-[60%] border-2 p-6 rounded-2xl">
        <div className="flex md:gap-2 gap-4 justify-between items-center w-full lg:w-auto">
          <h1 className="sm:text-xl md:text-xl lg:text-xl xl:text-2xl font-bold text-white select-none flex">
            RezaShirali{" "}
            <span className="hidden sm:flex">
              {" "}
              <span> - </span> ReactJS
            </span>
          </h1>
          <a
            href="https://github.com/Reza-Shirali"
            className="text-white text-3xl md:text-5xl"
            target="_blanc"
          >
            <FaGithub />
          </a>
        </div>
        <div className="hidden lg:flex">
          <h3 className="md:text-base lg:text-xl xl:text-2xl font-bold text-white select-none">
            Todo List - Drag And Drop
          </h3>
        </div>
      </header>
    </>
  );
}

export default Header;
