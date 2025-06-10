"use client";

import { useEffect, useState } from "react";
import About from "./components/about/about";
import StarBackground from "./components/canvas-stars/canvas-stars";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Projects from "./components/projects/projects";
import LoadingScreen from "./components/shared/loading-screen/loading-screen";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <LoadingScreen hidden={!loading} />
    );
  }

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
