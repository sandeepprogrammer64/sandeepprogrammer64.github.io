
import { Container, Row, Col} from "reactstrap"
import "./Aboutme.css";
import Skills from "../Skills/Skills";

import React from 'react';
import { useState } from "react";

function Aboutme() {


    const [about, setAbout] = useState("ABOUT");

  return <section id="about">
    <Container>
        <Row>
            <Col lg="12" className="mb-5">
                <h2>About Me</h2>
            </Col>
            <Col lg="4" md="3">
            <div className="about-btns d-flex flex-column align-items-center">
                <button className="about-btn about-btn-active" onClick={() => setAbout("ABOUT")}>About Me</button>
                <button className="about-btn" onClick={() => setAbout("SKILLS")}>Skills</button>
                
               
            </div>
            </Col>
            <Col lg="8" md="9">
             
             {
                about === "ABOUT" &&  <div className="about-content-wrapper d-flex gap-5">
                <div className="about-img">
                   <img src="https://avatars.githubusercontent.com/u/101393796?v=4" alt="sandeep" />
                </div>

                <div className="about-content w-80">
                  <h2>I'm Sandeep Prajapati</h2>
                  <p>
                       hello
                  </p>
                

                </div>
           </div>
             }

             {
                about === "SKILLS" && <Skills />
             }
            </Col>
        </Row>
    </Container>
  </section>
}

export default Aboutme