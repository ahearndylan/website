import { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Centro from "./components/portfolio/Centro";
import CKHQ from "./components/portfolio/CKHQ";
import Wecan from "./components/portfolio/Wecan";
import Barcard from "./components/portfolio/Barcard";
import Foodwaste from "./components/portfolio/Foodwaste";
import IVOC from "./components/portfolio/IVOC";
import Pacman from "./components/portfolio/Pacman";
import Game from "./components/portfolio/Game";
import Alumni from "./components/portfolio/Alumni";

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsRef = useRef(null);

  const handleProjectSelect = (projectName) => {
    setSelectedProject(projectName);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setSelectedProject(null);
    setTimeout(() => projectsRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
    <div className="min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(60rem_60rem_at_20%_-10%,rgba(99,102,241,0.18),transparent),radial-gradient(50rem_50rem_at_120%_20%,rgba(14,165,233,0.14),transparent)]" />
      <Navbar setSelectedProject={setSelectedProject} />

      {selectedProject === null ? (
        <main className="pt-20">
          <Hero />
          <About />
          <div ref={projectsRef}>
            <Projects onSelect={handleProjectSelect} />
          </div>
          <Resume />
          <Contact />
        </main>
      ) : selectedProject === "Centro" ? (
        <Centro onBack={handleBack} />
      ) : selectedProject === "CKHQ" ? (
        <CKHQ onBack={handleBack} />
      ) : selectedProject === "Wecan" ? (
        <Wecan onBack={handleBack} />
      ) : selectedProject === "Barcard" ? (
        <Barcard onBack={handleBack} />
      ) : selectedProject === "Foodwaste" ? (
        <Foodwaste onBack={handleBack} />
      ) : selectedProject === "IVOC" ? (
        <IVOC onBack={handleBack} />
      ) : selectedProject === "Pacman" ? (
        <Pacman onBack={handleBack} />
      ) : selectedProject === "Game" ? (
        <Game onBack={handleBack} />
      ) : selectedProject === "Alumni" ? (
        <Alumni onBack={handleBack} />
      ) : null}

      <Footer />
    </div>
  );
};

export default App;
