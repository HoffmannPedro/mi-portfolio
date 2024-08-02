import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-6 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow flex flex-col lg:ml-10 lg:pr-24 md:w-1/2 md:pr-16 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hola, soy Pedro.
          </h1>
          <p className="mb-8 leading-relaxed">
            Soy estudiante de desarrollo web y me apasiona convertir ideas en aplicaciones web.
            <br className="lg:inline-block" />
            Cada proyecto es una oportunidad para innovar y ofrecer algo útil y atractivo.
            <br className="lg:inline-block" />
            ¿Te gustaría trabajar conmigo? ¡Hablemos!
            <br className="lg:inline-block" />
            Explorá mis proyectos anteriores y descubrí cómo podemos hacer algo increíble juntos.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-5 px-6 focus:outline-none hover:bg-green-600 rounded text-lg sm:py-2 md:pt-5 lg:py-2"
            >
              Trabaja conmigo
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Mira mis trabajos anteriores
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded m-auto lg:ml-auto"
            alt="img_profile"
            src="https://github.com/HoffmannPedro/mi-portfolio/blob/master/src/assets/pepe.png?raw=true"
          />
        </div>
      </div>
    </section>
  );
}
