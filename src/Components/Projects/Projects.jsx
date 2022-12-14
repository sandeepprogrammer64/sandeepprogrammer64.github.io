import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section id="project">
      <h3 className="project-header">Explore my Projects</h3>
      <div className="project-images">
        <div>
          <img src="Farfetch.png" alt="" />
          <div>
            <h3 id="header">Tech Stack Used</h3>
            <a href="https://rad-chaja-917c26.netlify.app/" target="_blank">
              <button id="aTag">View Live</button>
            </a>

            <img
              style={{ width: "50px", height: "50px", marginLeft: "100px" }}
              src="https://cdn3d.iconscout.com/3d/free/thumb/html-5728485-4781249.png"
              alt=""
            />
            <img
              style={{ width: "50px", height: "50px", marginLeft: "5px" }}
              src="data:image/png;base64,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"
              alt=""
            />
            <img
              style={{ width: "50px", height: "50px", marginLeft: "5px" }}
              src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png"
              alt=""
            />

            <a
              style={{ marginLeft: "140px" }}
              href="https://github.com/sandeepprogrammer64/Farfetch_Clone"
              target="_blank"
            >
              <button id="aTag">Source</button>
            </a>
          </div>

          <h4 className="farfetch-header">
            Farfetch project is mainly dedicated to Fashion Enthusiasts. A
            website that offers various luxury brands from all over the world.
            It deals in Kid's, Men's and Women's fashion products.
          </h4>
        </div>

        <div>
          <img src="AirGarage.png" alt="" />
          <div>
            <h3 id="header">Tech Stack Used</h3>
            <a
              href="https://dazzling-meerkat-951529.netlify.app/"
              target="_blank"
            >
              <button id="aTag">View Live</button>
            </a>

            <img
              style={{ width: "50px", height: "50px", marginLeft: "70px" }}
              src="https://cdn3d.iconscout.com/3d/free/thumb/html-5728485-4781249.png"
              alt=""
            />
            <img
              style={{ width: "50px", height: "50px", marginLeft: "5px" }}
              src="data:image/png;base64,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"
              alt=""
            />
            <img
              style={{ width: "50px", height: "50px", marginLeft: "5px" }}
              src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png"
              alt=""
            />
            <img
              style={{ width: "50px", height: "50px", marginLeft: "5px" }}
              src="data:image/jpeg;base64,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"
              alt=""
            />

            <a
              style={{ marginLeft: "140px" }}
              href="https://github.com/sandeepprogrammer64/Airgarage-Clone"
              target="_blank"
            >
              <button id="aTag">Source</button>
            </a>
          </div>

          <h4 className="airGarage-header">
            AirGarage Project is a website that offers parking spaces all over
            the world. Enter your addresss and the available slots in your area
            will be alloted to you. It provides a hassle free experience in
            booking parking slots for your Vehicle.
          </h4>
        </div>


        

      </div>
      <script
        src="https://kit.fontawesome.com/8963c5ea10.js"
        crossorigin="anonymous"
      ></script>
    </section>
  );
}

export default Projects;
