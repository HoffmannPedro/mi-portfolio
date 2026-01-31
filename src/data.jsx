
// Proyectos realizados.
export const projects = [
  {
    title: "GamerStore",
    subtitle: "Java 21 / Spring Boot / React / PostgreSQL / Docker",
    description: {
      es: "E-commerce Full Stack con arquitectura de capas. Implementé seguridad con JWT/RBAC, gestión de estados complejos y persistencia en PostgreSQL. Optimizado para escalabilidad y desplegado con Docker.",
      en: "Full Stack e-commerce with layered architecture. Implemented JWT/RBAC security, complex state management, and PostgreSQL persistence. Optimized for scalability and deployed via Docker."
    },
    image: "https://res.cloudinary.com/dlvxoftyv/image/upload/v1769645257/ascreenshot_xxywc0.jpg",
    link: "https://gamer-store-teal.vercel.app/",
  },
  {
    title: "Pokédex",
    subtitle: "React / API Rest / JavaScript / CSS",
    description: {
      es: "Aplicación interactiva que consume datos de PokéAPI. Enfocada en la gestión de estados dinámicos, manejo de promesas (Fetch) y renderizado condicional para una navegación fluida.",
      en: "Interactive app consuming PokéAPI data. Focused on dynamic state management, promise handling (Fetch), and conditional rendering for a seamless user experience."
    },
    image: "/projects-imgs/pokedex-image.jpg",
    link: "https://pepdex.netlify.app/",
  },
  {
    title: "EDM Festival",
    subtitle: "HTML / CSS / JavaScript",
    description: {
      es: "Landing page responsiva con diseño moderno y 'Mobile First'. Aplicación de metodologías CSS avanzadas y optimización de recursos multimedia para mejorar el rendimiento de carga.",
      en: "Responsive landing page with a modern 'Mobile First' design. Built using advanced CSS methodologies and multimedia optimization to enhance loading performance."
    },
    image: "/projects-imgs/EDM-festival-image.png",
    link: "https://festival-edmtech.netlify.app/",
  },
  {
    title: "Mocca Blog",
    subtitle: "HTML5 / CSS3 / Flexbox / Grid",
    description: {
      es: "Estructura de blog profesional maquetada con HTML5 semántico. Uso estratégico de Flexbox y CSS Grid para lograr una interfaz adaptable, limpia y enfocada en la legibilidad.",
      en: "Professional blog structure built with semantic HTML5. Strategic use of Flexbox and CSS Grid to achieve an adaptive, clean interface focused on readability."
    },
    image: "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/61b3c1ab6bfdb1e2cc419427/screenshot_2021-12-10-21-07-57-0000.png&fit=cover&h=500&w=800",
    link: "https://moccablog.netlify.app",
  },
  {
    title: "Task List",
    subtitle: "React / MaterialUI / JavaScript",
    description: {
      es: "Gestor de tareas con lógica CRUD funcional. Implementado en React utilizando Material UI para los componentes de interfaz, garantizando un diseño limpio y profesional.",
      en: "Task manager with functional CRUD logic. Built in React using Material UI for interface components, ensuring a clean and professional UI design."
    },
    image: "/projects-imgs/listaTareas-image.webp",
    link: "https://listatareasap.netlify.app",
  },
  {
    title: "Calculadora",
    subtitle: "JavaScript / DOM / CSS",
    description: {
      es: "Aplicación lógica basada en el manejo de eventos de JavaScript. Resolución de operaciones mediante manipulación del DOM y gestión de tipos de datos en tiempo real.",
      en: "Logic-driven application based on JavaScript event handling. Solves operations through DOM manipulation and real-time data type management."
    },
    image: "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/653b0549468d5e00084b6a1d/screenshot_2023-10-27-00-33-21-0000.png&fit=cover&h=500&w=800",
    link: "https://calculadoracursojs.netlify.app",
  }
];

// Habilidades y Tecnologías.
export const skills = [
  {
    name: "JavaScript",
    icon: "icons/js.svg"
  },
  {
    name: "React",
    icon: "icons/react.svg"
  },
  {
    name: "HTML",
    icon: "icons/html.svg"
  },
  {
    name: "CSS",
    icon: "icons/css.svg"
  },
  {
    name: "Bootstrap",
    icon: "icons/bootstrap.svg"
  },
  {
    name: "Tailwind CSS",
    icon: "icons/tailwind.svg"
  },
  {
    name: "GIT",
    icon: "icons/git.svg"
  },
  {
    name: "JAVA",
    icon: "icons/java.svg"
  },
  {
    name: "Spring Boot",
    icon: "icons/spring-boot.svg"
  },
  {
    name: "PostgreSQL",
    icon: "icons/postgresql.svg"
  },
  {
    name: "Postman",
    icon: "icons/postman.svg"
  }
];

// Textos About.jsx
export const texts = {
  about: {
    es: {
      p1: 'Desarrollador Full Stack | Estudiante de Licenciatura en Sistemas',
      p2: 'Especializado en construir aplicaciones web funcionales y eficientes utilizando Java, Spring Boot y React.',
      p3: 'Mi enfoque combina la formación académica con la creación de soluciones escalables y un código bien estructurado.',
      p4: '¿Buscás un perfil técnico comprometido con la calidad? Te invito a explorar mis proyectos y contactarme.',
      btn1: 'Trabaja conmigo',
      btn2: 'Mira mis trabajos anteriores'
    },
    en: {
      p1: 'Full Stack Developer | B.S. in Computer Science Student.',
      p2: 'Focused on developing high-performance, functional web applications with expertise in Java, Spring Boot, and React.',
      p3: 'I bridge the gap between academic theory and practical execution, focusing on scalable solutions and clean, well-structured code.',
      p4: 'Are you looking for a quality-driven technical profile? I invite you to explore my projects and get in touch.',
      btn1: "Work with me",
      btn2: "Check out my previous work"
    }
  },
  navbar: {
    es: {
      a1: "Trabajos anteriores",
      a2: "Habilidades",
      a3: "¡Contrátame!"
    },
    en: {
      a1: "Previous work",
      a2: "Skills",
      a3: "Hire me!"
    }
  },
  projects: {
    es: {
      h2: "Aplicaciones que he construido",
      p: "Mirá algunos de los proyectos que he realizado"
    },
    en: {
      h2: "Applications I've built",
      p: "Take a look at some of the projects I've completed"
    }
  },
  skills: {
    es: {
      h2: "Habilidades y Tecnologías",
      p1: "Estas son algunas de las tecnologías y herramientas que uso para construir aplicaciones web.",
      p2: "Siempre estoy explorando nuevas tendencias para mantenerme al día."
    },
    en: {
      h2: "Skills and Technologies",
      p1: "Here are some of the technologies and tools I use to build web applications.",
      p2: "I'm always exploring new trends to stay up-to-date."
    }
  },
  contact: {
    es: {
      h3: "¡Estoy listo para que trabajemos juntos!",
      p1: "Si tenés un proyecto o una idea en mente y querés sumar fuerzas, no dudes en contactarme.",
      p2: "Completa el formulario abajo y en breve me estaré comunicando con vos.",
      p3: "¡Espero tu mensaje para empezar a hacer algo genial juntos!",
      label1: "Nombre",
      label2: "Correo Electrónico",
      label3: "Mensaje",
      btnSubmit: "Enviar",
      sending: "Enviando...",
      btnCv: "¡Descarga mi CV!",
      copyright: "Desarrollado por Pedro Hoffmann ©",

      sbmtMsg: {
        title: "¡Mensaje enviado con éxito!",
        p: "Sera respondido a la brevedad",
      },
      cvMsg: {
        title: "Estás a punto de descargar mi C.V.",
        confirmBtn: "Descargar",
        cancelBtn: "Cancelar"
      }
    },
    en: {
      h3: "I'm ready for us to work together!",
      p1: "If you have a project or idea in mind and want to join forces, don't hesitate to contact me.",
      p2: "Fill out the form below, and I'll get in touch with you soon.",
      p3: "I look forward to your message so we can start creating something great together!",
      label1: "Name",
      label2: "Email",
      label3: "Message",
      btnSubmit: "Send",
      sending: "Sending...",
      btnCv: "Download my resume!",
      copyright: "Developed by Pedro Hoffmann ©",

      sbmtMsg: {
        title: "Message sent successfully!",
        p: "It will be replied to shortly.",
      },
      cvMsg: {
        title: "You are about to download my resume.",
        confirmBtn: "Download",
        cancelBtn: "Cancel"
      }
    }
  },
};
