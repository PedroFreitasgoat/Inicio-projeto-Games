import React, { useState } from "react";
import logo from "../assets/Images/logo2.png";
import { HiMagnifyingGlass, HiMiniMoon, HiSun } from "react-icons/hi2";

function Header() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="flex items-center p-3">
      <img src={logo} width={60} height={60} alt="Logo" />
      <div className="flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full">
        <HiMagnifyingGlass />
        <input
          type="text"
          placeholder="Search Games"
          className="px-2 bg-transparent dark:bg-cyan-500 outline-none"
        />
      </div>
      <div>
        {toggle ? (
          <HiMiniMoon
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={handleToggle}
          />
        ) : (
          <HiSun
            onClick={handleToggle}
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}

export default Header;
