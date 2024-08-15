import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { texts } from "../data";

export default function Navbar({ language, onLanguageChange }) {
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
            {texts.navbar[language].a1}
          </a>
          <a
            href="#skills"
            className="md:mr-5 mt-4 md:mt-0 hover:text-white"
          >
            {texts.navbar[language].a2}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center bg-gray-800 border-0 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            {texts.navbar[language].a3}
            <ArrowNarrowRightIcon className="w-4 h-4 ml-1" />
          </a>
        </nav>
      </div>
        <div className="absolute top-0 right-1 md:right-5 md:top-5 items-center justify-center">
          <button onClick={onLanguageChange} className="relative flex items-center p-2">
            <div className="flex items-center">
              <div className="relative w-12 h-5 bg-gray-600 rounded-full">
                <div
                  className={`absolute h-5 w-5 rounded-full bg-cover bg-no-repeat transition-transform duration-300 ${language === "es" ? "transform translate-x-0" : "transform translate-x-8"}`}
                  style={{ backgroundImage: `url(${language === "es" ? "https://img.icons8.com/color/48/spain2-circular.png" : "https://img.icons8.com/color/48/great-britain-circular.png"})` }}
                />
              </div>
            </div>
          </button>
        </div>
    </header>
  );
}
