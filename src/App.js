import "./Main.css";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="bg-velvet-espresso min-h-screen">
      <Nav />
      <Hero />
      <section id="projects">
        <Projects />
      </section>
      <section id="toolkit">
        <Skills />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
