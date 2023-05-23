import React from "react";

import Navbar from "../Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <>
      <Navbar />
      <Container fluid>
          <Hero />
          <section id="about">
              <About />
          </section>
          <section id="projects">
              <Projects />
          </section>
          <section id="contact">
              <Contact />
          </section>
          <Footer />
      </Container>
    </>
  );
}

export default Home;
