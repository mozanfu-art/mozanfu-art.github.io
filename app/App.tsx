import { Navigation } from "./components/Navigation.js"; // Adjusted to relative path
import { Hero } from "./components/Hero.js"; // Adjusted to relative path
import { About } from "./components/About.js"; 
import { Skills } from "./components/Skills.js"; 
import { Experience } from "./components/Experience.js"; 
import { Projects } from "./components/Projects.js"; 
import { Contact } from "./components/Contact.js"; 
import { Footer } from "./components/Footer.js"; 

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
