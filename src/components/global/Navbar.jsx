"use client";

import ThemeChanger from "./ThemeChanger";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaBarsStaggered, FaXmark} from "react-icons/fa6";
import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className="fixed top-0 left-0 right-0 flex w-full
	  		items-center justify-between p-4
	  		backdrop-blur-sm z-50 dark:text-slate-100 text-gray-800 "
    >
      <div className="flex items-center">
        <Link href="/" className="md:text-2xl text-lg font-[500]">
          React Audio Canvas
        </Link>
      </div>
      <div className="flex space-x-4 items-center md:hidden">
        <button onClick={() => setShowMenu(true)}>
          <FaBarsStaggered />
        </button>
      </div>
      <div className="space-x-4 items-center hidden md:flex">
        <Link
          href="/docs"
          className="hover:underline transition-all ease-in-out"
        >
          Documentation
        </Link>
        <Link
          href="/example"
          className="hover:underline transition-all ease-in-out"
        >
          Example
        </Link>
        <Link
          href="/contact"
          className="hover:underline transition-all ease-in-out"
        >
          Contact
        </Link>
        <a href="https://github.com/Sidmaz666/react-audio-canvas" target="_blank">
          <FaGithub />
        </a>
        <ThemeChanger />
      </div>
    	<MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
}

const MobileMenu = ({ showMenu, setShowMenu }) => {
  return (
    <>
      {showMenu ? (
        <div className="md:hidden top-0 left-0 w-screen h-screen absolute dark:bg-black bg-slate-100 flex flex-col items-center justify-center space-y-4 z-50">
	  <button className="absolute top-4 right-4" onClick={() => setShowMenu(false)}>
		<FaXmark/>
	  </button>
          <Link href="/docs" onClick={() => setShowMenu(false)}>Documentation</Link>
          <Link href="/example" onClick={() => setShowMenu(false)}>Example</Link>
          <Link href="/contact" onClick={() => setShowMenu(false)}>Contact</Link>
	  <a href="#">Github</a>
	 <ThemeChanger />
        </div>
      ) : null}
    </>
  );
};
