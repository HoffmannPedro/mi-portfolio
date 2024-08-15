import React from "react";
import { texts } from "../data";

export default function About({language}) {
  return (
    <section id="about">
      <div className="container mx-auto flex px-6 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow flex flex-col lg:ml-10 lg:pr-24 md:w-1/2 md:pr-16 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {texts.about[language].h1}
          </h1>
          <p className="mb-8 leading-relaxed">
            {texts.about[language].p1}
            <br className="lg:inline-block" />
            {texts.about[language].p2}
            <br className="lg:inline-block" />
            {texts.about[language].p3}
            <br className="lg:inline-block" />
            {texts.about[language].p4}
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-5 px-6 focus:outline-none hover:bg-green-600 rounded text-lg sm:py-2 md:pt-5 lg:py-2"
            >
              {texts.about[language].btn1}
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              {texts.about[language].btn2}
            </a>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-5/6 lg:mr-10">
          <img
            className="object-cover object-center rounded m-auto lg:ml-auto"
            alt="img_profile"
            src="pepe.png"
          />
        </div>
      </div>
    </section>
  );
}
