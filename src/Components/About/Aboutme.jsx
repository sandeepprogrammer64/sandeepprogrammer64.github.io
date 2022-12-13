import { Container, Row, Col } from "reactstrap";
import "./Aboutme.css";
import Skills from "../Skills/Skills";

import React from "react";
import { useState } from "react";

function Aboutme() {
  const [about, setAbout] = useState("ABOUT");

  return (
    <section id="about me">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2 style={{marginTop:"100px", background:"#7865ff", height:"50px"}}>About Me & Skills</h2>
          </Col>
          <Col lg="4" md="3">
            <div className="about-btns d-flex flex-column align-items-center">
              <button
                className={`about-btn ${
                  about === "ABOUT" ? "about-btn-active" : ""
                }`}
                onClick={() => setAbout("ABOUT")}
              >
                About Me
              </button>
              <button
                className={`about-btn ${
                  about === "SKILLS" ? "about-btn-active" : ""
                }`}
                onClick={() => setAbout("SKILLS")}
              >
                Skills
              </button>
            </div>
          </Col>
          <Col lg="8" md="9">
            {about === "ABOUT" && (
              <div className="about-content-wrapper d-flex gap-5">
                <div className="about-img">
                  <img
                    src="https://avatars.githubusercontent.com/u/101393796?v=4"
                    alt="sandeep"
                  />
                </div>

                <div className="about-content w-80">
                  <h2>I'm Sandeep Prajapati</h2>
                  <h4>I developed my interest in Web Development when I was working as an 
                    Accounts Intern in Delhi.At present, I am pursuing Full Stack Web Development (Full Time) 
                    Course from Masai School, where I have completed several individual and group Projects and have 
                    the required skill set to develop Web Applications from scratch. 
                    Mention me a Problem an I will be  there for You.
                  </h4>
                </div>
              </div>
            )}

            {about === "SKILLS" && <Skills />}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Aboutme;
