import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills, texts } from "../data";


export default function Skills({language}) {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h2 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            {texts.skills[language].h2}
          </h2>
          <p className="text-base leading-relaxed x1:w-2/4 lg:w-3/4 mx-auto">
            {texts.skills[language].p1}
            <br className="lg:inline-block" />
            {texts.skills[language].p2}
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-2 sm:w-1/2 w-full"
            >
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <img src={skill.icon} alt={"img-" + skill.name} className="size-14 mr-3"/>
                <span className="title-font font-medium text-white pt-1">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
