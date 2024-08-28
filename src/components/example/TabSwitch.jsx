"use client";
import { useState } from "react";
import Code from "../global/Code";

export default function TabSwitch({ children, code, title, description }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="flex flex-col w-full h-full space-y-2 pt-4">
      <div className="flex justify-between items-center">
        <h2 className="text-md md:text-2xl">{title}</h2>
        <div className="flex justify-end items-center">
          <button
            className={`p-2 px-4 ${
              activeTab === 0
                ? "bg-blue-500 text-white"
                : "bg-slate-200/50 dark:bg-gray-800/50"
            } rounded-s-md`}
            onClick={() => setActiveTab(0)}
          >
            Example
          </button>
          <button
            className={`p-2 px-4 ${
              activeTab === 1
                ? "bg-blue-500 text-white-"
                : "bg-slate-200/50 dark:bg-gray-800/50"
            } rounded-e-md`}
            onClick={() => setActiveTab(1)}
          >
            Code
          </button>
        </div>
      </div>
      {
	description && (
	  <p>{description}</p>
	) || null
      }
      {activeTab === 0 ? children : null}
      {activeTab === 1 ? (
        <Code language="javascript" floatCopyButton={true} showLineNumbers={true}>
          {code}
        </Code>
      ) : null}
    </div>
  );
}
