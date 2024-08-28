"use client";

import { useEffect } from "react";

const scrollToElementWithOffset = (targetId) => {
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
    }
};

export default function Sidebar() {
  return (
    <nav
      className="hidden md:flex flex-col w-[350px] 
	      bg-slate-100/50 dark:bg-gray-800/10 items-center h-screen sticky top-[4.5rem] left-0"
    >
      <SidebarLink
        text="Installation"
        href="#installation"
        id="installation-link"
      />
      <SidebarLink text="Imports" href="#imports" id="imports-link" />
      <SidebarLink text="Audio" href="#audio" id="audio-link" />
      <SidebarLink
        text="Audio Player"
        href="#audioplayer"
        id="audioplayer-link"
      />
      <SidebarLink
        text="Audio Stream"
        href="#audiostream"
        id="audiostream-link"
      />
      <SidebarLink text="useAudio" href="#useaudio" id="useaudio-link" />
      <SidebarLink text="useCanvas" href="#usecanvas" id="usecanvas-link" />
      <SidebarLink
        text="detectNotes"
        href="#detectnotes"
        id="detectnotes-link"
      />
      <SidebarLink
        text="Notes"
        href="#notes"
        id="notes-link"
      />
      <SidebarLink
        text="Developement"
        href="#developement"
        id="developement-link"
      />
      <SidebarLink
        text="Contributions"
        href="#contributions"
        id="contributions-link"
      />
    </nav>
  );
}

function SidebarLink({ text, href, id }) {
  const highlightMenu = (id) => {
    document.querySelectorAll(`.dynamic-link`).forEach((link) => {
      if (link.id === id) {
        link.classList.add("text-blue-500");
      } else {
        link.classList.remove("text-blue-500");
      }
    });
    window.location.hash = `#${id.replace("-link", "")}`;
    scrollToElementWithOffset(`#${id.replace("-link", "")}`);
  };

  useEffect(() => {
    if (window.location.hash === "" && id === "installation-link") {
      window.location.hash = "#installation";
      highlightMenu(id);
    }
  }, []);

  return (
    <a
      href={href}
      onClick={() => highlightMenu(id)}
      className="dynamic-link hover:underline text-start w-full p-2 pl-5
      dark:hover:bg-gray-800/20 hover:bg-slate-200/50 text-lg tracking-wider"
      id={id}
    >
      {text}
    </a>
  );
}
