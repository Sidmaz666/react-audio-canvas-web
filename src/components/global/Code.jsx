"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FaRegCopy } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

const Code = ({
  children,
  floatCopyButton = false,
  language = "cmake",
  customStyle = {},
  showLineNumbers=false
}) => {
  const [_theme, _setTheme] = useState(undefined);
  const { theme } = useTheme();
  useEffect(() => {
    if (!theme) return;
    _setTheme(theme);
  }, [theme]);

  const copyText = () => {
    navigator?.clipboard?.writeText(children);
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "scale-100" : "scale-0"
        } transition-all ease-in-out px-4 py-2 
	  flex items-center w-auto space-x-4
	  bg-white dark:bg-gray-800 dark:text-slate-100 shadow-lg rounded-lg 
	  pointer-events-auto ring-1 ring-black ring-opacity-5`}
      >
      <span className="flex items-center space-x-2">
	<IoIosCheckmarkCircle className="text-green-500"/>
      <span className="font-semibold">
	Copied
      </span>
      </span>
      <button onClick={() => toast.dismiss(t.id)}>
	<FaXmark/>
      </button>
      </div>
    ));
  };

  return (
    <>
      {_theme && (
        <div className="relative z-10">
          <Toaster position="bottom-right" reverseOrder={false} />
          <SyntaxHighlighter
	    showLineNumbers={showLineNumbers}
            className="rounded-md text-xs md:text-lg shadow-sm shadow-gray-400 dark:shadow-none"
            customStyle={{
              paddingLeft: "0.8rem",
              paddingRight: "2rem",
              ...customStyle,
            }}
            language={language}
            style={_theme == "dark" ? atomOneDark : atomOneLight}
          >
            {children}
          </SyntaxHighlighter>
            <button
              onClick={copyText}
              className={
	      `absolute ${
		floatCopyButton ? ' top-4 right-4 ' : ' top-0 right-0 flex h-full w-[30px] items-center justify-center '
	      } 
	      	z-20
		dark:text-slate-300 text-gray-700 outline-none
		`
	      }
            >
              <FaRegCopy />
            </button>
        </div>
      )}
    </>
  );
};

export default Code;
