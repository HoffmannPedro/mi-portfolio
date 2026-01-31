import { ChipIcon } from "@heroicons/react/solid";
import { skills, texts } from "../data";

export default function Skills({language}) {
  return (
    <section id="skills" className="bg-gray-900">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4 text-green-500" />
          <h2 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            {texts.skills[language].h2}
          </h2>
          <div className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400">
            <p>{texts.skills[language].p1}</p>
            <p>{texts.skills[language].p2}</p>
          </div>
        </div>
        
        {/* Grilla optimizada: 2 columnas en móvil, 3 en tablets, 4 en desktop */}
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-2 lg:w-1/4 md:w-1/3 sm:w-1/2 w-full group"
            >
              <div className="bg-gray-800 rounded flex p-4 h-full items-center border border-transparent group-hover:border-green-500 transition-all duration-300 shadow-lg">
                <img
                  src={skill.icon}
                  alt={`Tecnología ${skill.name}`}
                  className="size-10 mr-4 group-hover:scale-110 transition-transform"
                  loading="lazy"
                />
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