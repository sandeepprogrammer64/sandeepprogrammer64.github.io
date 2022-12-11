import React from "react";
import "./Projects.css";
import { Container, Row, Col } from "reactstrap";

const projectData = [
    {
        image: "Farfetch.png",
        title: "Fafetch Website",
        imageUrl: "https://rad-chaja-917c26.netlify.app/",
        
    },
    {
        image: "GearBest.png",
        title: "GearBest Website",
        imageUrl: "https://lucky-basbousa-cb58e5.netlify.app/",
    },
    // {
    //     image: "AirGarage.png",
    //     title: "AirGarage Website",
    //     imageUrl: "https://dazzling-meerkat-951529.netlify.app/",
    // },
]

function Projects() {
  return (
    <section id="project">
      <Container>
        <Row>
          <Col lg="12" className="project-top mb-5">
            <h4>Explore My Projects</h4>
          </Col>

          {
            projectData.map((item, index) =>
            {
                return  <Col lg="4" md="6" sm="6" key={index}>
                <div className="project-card  gap-300">
                  <div className="project-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                 <div className="project-content">
                    <div className="content-top">
                      <h5>{item.title}</h5>
                      <a href={item.imageUrl}>
                        <button className="project-btn">View Live</button>{" "}
                      </a>
                      <a href="https://github.com/sandeepprogrammer64/Farfetch_Clone">
                        <button className="project-btn">Source</button>{" "}
                      </a>
                    </div>
                 </div>
                </div>
              </Col>
            })
          }

         
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
