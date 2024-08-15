import React, { useState }from "react";
import "/node_modules/tailwindcss/tailwind.css";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";

function App() {
  const [language, setLanguage] = useState("es");

  const handleLanguageChange = () => {
    setLanguage(prevLang => (prevLang === "es" ? "en" : "es"));
  };

  return (
    <>
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar language={language} onLanguageChange={handleLanguageChange} />
        <About language={language} />
        <Projects language={language} />
        <Skills language={language} />
        <Contact language={language} />
      </main>
    </>
  );
}

export default App;
