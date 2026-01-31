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
              <div className="relative overflow-hidden rounded-lg flex flex-col bg-gray-800 sm:bg-transparent">
                {/* Contenedor de la Imagen: Altura fija para mantener simetría */}
                <div className="h-64 w-full overflow-hidden">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    src={project.image}
                    loading="lazy"
                  />
                </div>

                {/* Contenedor de Texto: 
                    Móvil: Posición relativa, fondo sólido, altura automática (crece según el texto).
                    Desktop (sm): Absoluto, centrado, oculto hasta el hover.
                */}
                <div className="relative sm:absolute inset-0 z-10 w-full p-6 
                                flex flex-col justify-center items-center
                                bg-gray-800 sm:bg-gray-900 sm:bg-opacity-95 
                                opacity-100 sm:opacity-0 sm:group-hover:opacity-100 
                                transition-opacity duration-300 border-4 border-transparent sm:group-hover:border-gray-800">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-center text-sm sm:text-base">
                    {project.description[language]}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}