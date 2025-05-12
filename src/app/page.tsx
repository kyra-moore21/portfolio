import About from "./components/about/about";
import StarBackground from "./components/canvas-stars/canvas-stars";
import FogBackground from "./components/fog-background/fog-background";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Projects from "./components/projects/projects";

export default function Home() {
  return (
    <div>
      <StarBackground />
      <Navbar />
      <div className="container">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </div>
    </div>
  );
}
