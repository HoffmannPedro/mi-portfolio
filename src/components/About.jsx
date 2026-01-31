import { handleDownloadCV } from "../utils/downloadCV";
import { texts } from "../data";

export default function About({ language }) {
  return (
    <section id="about">
      <div className="container mx-auto flex px-6 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow flex flex-col lg:ml-10 lg:pr-24 md:w-1/2 md:pr-16 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white whitespace-pre-line">
            {texts.about[language].h1}
          </h1>
          <div className="mb-8 leading-relaxed text-gray-400">
            <span className="block font-bold text-white mb-2 text-xl">
              {texts.about[language].p1}
            </span>
            <p>
              {texts.about[language].p2}
              <br className="hidden lg:inline-block" />
              {texts.about[language].p3}
              <br className="hidden lg:inline-block" />
              {texts.about[language].p4}
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg transition-colors"
            >
              {texts.about[language].btn1}
            </a>

            <button
              onClick={() => handleDownloadCV(language)}
              className="inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded text-lg transition-colors duration-300"
            >
              {texts.contact[language].btnCv}
            </button>

            <a
              href="#projects"
              className="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg transition-colors"
            >
              {texts.about[language].btn2}
            </a>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-5/6 lg:mr-10">
          <img
            className="object-cover object-center rounded-full shadow-2xl border-4 border-gray-800 m-auto lg:ml-auto"
            alt="Pedro Hoffmann - Desarrollador Full Stack"
            src="pepe.webp"
          />
        </div>
      </div>
    </section>
  );
}