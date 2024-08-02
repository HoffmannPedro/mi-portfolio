import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import swal from 'sweetalert';

export default function Contact() {
  const [state, handleSubmit] = useForm("mqazqglq");

  if (state.succeeded) {
    setTimeout(() => {
      window.location.reload(); // Recargar la página
    }, 3000);
    return swal("¡Mensaje enviado con éxito!", "Sera respondido a la brevedad", "success");
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:w-2/4 lg:m-auto md:w-3/4 md:m-auto w-full md:py-8 md:mt-0"
        >
          <h3 className="w-full flex flex-col mt-8 mb-6 text-center lg:w-full md:w-1/2 md:w-full md:mt-0 sm:w-full sm:mt-0 sm:mb-5 font-medium text-2xl">
            ¡Estoy listo para trabajar juntos!
          </h3>
          <p className="leading-relaxed mb-5 text-center">
            Si tenés un proyecto copado o una idea en mente y querés sumar fuerzas, no dudes en contactarme. 
            Completa el formulario abajo y me pondré en contacto con vos en seguida.
            <br className="lg:inline-block" />
            ¡Espero tu mensaje para empezar a hacer algo genial juntos!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border-gray-700 focus:border-indigo-500 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <ValidationError
              prefix="Nombre"
              field="name"
              errors={state.errors}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border-gray-700 focus:border-indigo-500 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <ValidationError
              prefix="Correo Electrónico"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-400">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border-gray-700 focus:border-indigo-500 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
            <ValidationError
              prefix="Mensaje"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            disabled={state.submitting}
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}