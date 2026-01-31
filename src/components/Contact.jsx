import { useState, useRef } from "react";
import Swal from "sweetalert2";
import { texts } from "../data";
import emailjs from '@emailjs/browser';
import { handleDownloadCV } from "../utils/downloadCV";

export default function Contact({ language }) {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(); // Referencia al formulario para EmailJS

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        Swal.fire({
          title: texts.contact[language].sbmtMsg.title,
          text: texts.contact[language].sbmtMsg.p,
          icon: "success",
          background: '#0D1F22',
          color: '#fff',
          confirmButtonColor: '#4F46E5'
        });
        e.target.reset();
      })
      .catch((error) => {
        console.error(error.text);
        // Opcional: Agregar un Swal de error aquí
      })
      .finally(() => {
        setIsSubmitting(false); // Importante: devolvemos el estado a false
      });
  };

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        {/* Agregamos la referencia 'ref={formRef}' al formulario */}
        <form
          ref={formRef}
          onSubmit={handleFormSubmit}
          className="flex flex-col lg:w-2/4 lg:m-auto md:w-3/4 md:m-auto w-full md:py-8 md:mt-0"
        >
          <h3 className="w-full flex flex-col mt-8 mb-6 text-center lg:w-full md:w-1/2 md:w-full md:mt-0 sm:w-full sm:mt-0 sm:mb-5 font-medium text-2xl">
            {texts.contact[language].h3}
          </h3>
          <p className="leading-relaxed mb-5 text-center">
            {texts.contact[language].p1}
            <br className="lg:inline-block" />
            {texts.contact[language].p2}
            <br className="lg:inline-block" />
            {texts.contact[language].p3}
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              {texts.contact[language].label1}
            </label>
            <input
              required
              type="text"
              id="name"
              name="name" // Debe coincidir con {{name}} en EmailJS
              className="w-full bg-gray-800 rounded border-gray-700 focus:border-indigo-500 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              {texts.contact[language].label2}
            </label>
            <input
              required
              type="email"
              id="email"
              name="email" // Debe coincidir con {{email}} en EmailJS
              className="w-full bg-gray-800 rounded border-gray-700 focus:border-indigo-500 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-400">
              {texts.contact[language].label3}
            </label>
            <textarea
              required
              id="message"
              name="message" // Debe coincidir con {{message}} en EmailJS
              className="w-full bg-gray-800 rounded border-gray-700 focus:border-indigo-500 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          {/* Botón de envío optimizado */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`text-white border-0 py-2 px-6 focus:outline-none rounded text-lg transition-all ${isSubmitting
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-indigo-500 hover:bg-indigo-600"
              }`}
          >
            {isSubmitting
              ? texts.contact[language].sending
              : texts.contact[language].btnSubmit}
          </button>
        </form>
      </div>

      {/* Footer y Copyright (Sin cambios) */}
      <div id="footer" className="container w-full mx-auto px-5 pb-5 flex-row md:flex justify-end">
        <div className="flex justify-center w-full md:w-1/3">
          <a href="https://www.linkedin.com/in/hoffmannpedro/" className="px-5 hover:animate-bounce">
            <img src="icons/linkedin.svg" alt="img-linkedin" className="md:size-14" />
          </a>
          <a href="https://github.com/HoffmannPedro" className="px-5 hover:animate-bounce">
            <img src="icons/github.svg" alt="img-github" className="size-14" />
          </a>
        </div>
        <div className="flex justify-center pt-5 md:pt-0 md:justify-end md:w-1/3">
          <div className="flex hover:scale-110 hover:transition-all">
            <button onClick={() => handleDownloadCV(language)} className="content-center text-white font-semibold text-lg">{texts.contact[language].btnCv}</button>
            <img src="https://img.icons8.com/color/48/000000/pdf.png" alt="pdf" className="size-8 my-auto" />
          </div>
          <span className="relative flex h-3 w-3 lg:mr-5 top-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
        </div>
      </div>
      <div id="copyright" className="flex justify-center text-sm mt-5 pb-1">
        <p>{texts.contact[language].copyright}</p>
      </div>
    </section>
  );
}