import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { projects, texts } from "../data.jsx";

export default function Projects({ language }) {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h2 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            {texts.projects[language].h2}
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {texts.projects[language].p}
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-full p-4 group"
            >
              <div
                className="relative overflow-hidden rounded-lg flex flex-col project-container"
                style={{ minHeight: "16rem" }}
              >
                <img
                  alt="gallery"
                  className="w-full object-cover object-center flex-shrink-0"
                  src={project.image}
                  style={{ height: "16rem", width: "100%" }}
                />
                <div className="absolute sm:relative inset-0 w-full h-full flex">
                  <div className="flex flex-col justify-center items-center w-full h-full border-4 border-gray-800 bg-gray-900 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-8 py-10">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed text-center">
                      {project.description[language]}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
