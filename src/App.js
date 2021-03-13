import "./App.css";
import "./Main.css";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import backgroundColors from "./assets/backgroundColors.png";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <div
        className="bgImage"
        style={{ backgroundImage: `url(${backgroundColors})` }}
      >
        <Nav />
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
