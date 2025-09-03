import React from "react";
import Hero from "../components/Hero";
import Contact from "./Contact";
import ProjectList from "../components/ProjectList";
import { About } from "./About";
import { Skills } from "./Skills";

export default function Home() {


    return (
        <div >
          
            <section id="Home">
                <Hero/>
            </section>
            <section id="projects">
            <ProjectList/>
            </section>

            <section id="skills">
            <Skills/>
            </section>
            
            <section id="contact">
                <Contact/>
            </section>
            <section id="about">
                <About/>
            </section>
            
        </div>

    );
}
