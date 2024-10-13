import React from "react";

import { FaGithub } from "react-icons/fa";

function Header() {
  return (
    <>
      <header className="my-6 flex justify-between items-center w-[60%] border-2 p-4 rounded-2xl">
        <div className="flex gap-4 justify-center items-center">
          <h1 className="text-2xl font-bold text-white select-none">
            RezaShirali - ReactJS
          </h1>
          <a href="https://github.com/Reza-Shirali" className="text-white text-5xl" target="_blanc"><FaGithub /></a>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white select-none">Todo List - Drag And Drop</h3>
        </div>
      </header>
    </>
  );
}

export default Header;
