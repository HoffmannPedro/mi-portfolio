import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a
            href="#about"
            className="md:ml-3 text-xl"
          >
            Pedro Hoffmann
          </a>
        </a>
        <nav className="flex items-center text-base justify-center flex-col md:flex-row md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-gray-700">
          <a
            href="#projects"
            className="md:mr-5 hover:text-white"
          >
            Trabajos anteriores
          </a>
          <a
            href="#skills"
            className="md:mr-5 mt-4 md:mt-0 hover:text-white"
          >
            Habilidades
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          ¡Contrátame!
          <ArrowNarrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
