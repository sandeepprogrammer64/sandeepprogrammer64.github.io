import React from "react";
import "./Projects.css";
import { SiJavascript } from "react-icons/si";

function Projects() {
  return (
    <section id="project">
      <h2 id="project_header">Explore My Projects</h2>
      <div className="project-images">
        <div>
          <img src="FarfetchGIF.gif" alt="" />
        </div>

        <div>
          <h2 className="Farfetch-title" >
            Farfetch Clone
          </h2>
          <h4 className="farfetch-header">
            Farfetch project is mainly dedicated to Fashion Enthusiasts. A
            website that offers various luxury brands from all over the world.
            It deals in Kid's, Men's and Women's fashion products.
          </h4>
          <br />
          <h6>
            <b>Features:</b>
          </h6>
          <span>Sign-Up / Login &nbsp;</span>
          <span>| &nbsp;Add To Cart &nbsp; </span>
          <span>| &nbsp;CheckOut &nbsp;</span>
          <span>| &nbsp;Sorting & Filtering &nbsp;</span>

          <h3 id="header1">Tech Stack Used</h3>
          <a href="https://rad-chaja-917c26.netlify.app/" target="_blank">
            <button id="aTag1">View Live</button>
          </a>

          <img
            style={{ width: "40px", height: "40px", marginLeft: "50px" }}
            src="https://cdn3d.iconscout.com/3d/free/thumb/html-5728485-4781249.png"
            alt=""
          />
          <img
            style={{ width: "40px", height: "40px", marginLeft: "5px" }}
            src="data:image/png;base64,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"
            alt=""
          />
          <img
            style={{ width: "40px", height: "40px", marginLeft: "5px" }}
            src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png"
            alt=""
          />

          <a
            style={{ marginLeft: "50px" }}
            href="https://github.com/sandeepprogrammer64/Farfetch_Clone"
            target="_blank"
          >
            <button id="aTag1">View Code</button>
          </a>
        </div>
      </div>

      <div className="project-images">
        <div>
          <h2 className="AirGarage-title">
            AirGarage Clone
          </h2>
          <h4 className="airgarage-header">
            AirGarage Website is used for booking Parking Slots. A website that
            provides Parking Slots for cities all around the World .
          </h4>
          <br />
          <h6 style={{marginLeft:"50px"}}>
            <b>Features:</b>
          </h6>
          <span style={{marginLeft:"50px"}}>Sign-Up / Login &nbsp;</span>
          <span>| &nbsp;Booking &nbsp; </span>
          <span>| &nbsp;Location API &nbsp;</span>
          <span>| &nbsp;onSearch &nbsp;</span>

          <h3 id="header2">Tech Stack Used</h3>
          <a
            href="https://dazzling-meerkat-951529.netlify.app/"
            target="_blank"
          >
            <button id="aTag2">View Live</button>
          </a>

          <img
            style={{ width: "40px", height: "40px", marginLeft: "50px" }}
            src="https://cdn3d.iconscout.com/3d/free/thumb/html-5728485-4781249.png"
            alt=""
          />
          <img
            style={{width: "40px", height: "40px", marginLeft: "5px" }}
            src="data:image/png;base64,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"
            alt=""
          />
          <img
            style={{ width: "40px", height: "40px", marginLeft: "5px" }}
            src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png"
            alt=""
          />

          <a
            style={{ marginLeft: "50px" }}
            href="https://github.com/sandeepprogrammer64/Airgarage-Clone"
            target="_blank"
          >
            <button id="aTag1">Source</button>
          </a>
        </div>

        <div>
          <img src="AirGarageGIF.gif" alt="" />
        </div>
      </div>

      <div className="project-images">
        <div>
          <img src="GearBestGIF.gif" alt="" />
        </div>

        <div>
          <h2 style={{ marginLeft: "140px", marginTop: "15px" }}>
            GearBest Clone
          </h2>
          <h4 className="farfetch-header">
            GearBest is an E-Commerce Website which deals with brands from all around the world.
            It  provides the most cost-efficient delivery service covering 200+ countries and regions, most of which enjoy free door-to-door delivery.
            
          </h4>
          <br />
          <h6>
            <b>Features:</b>
          </h6>
          <span>Sign-Up / Login &nbsp;</span>
          <span>| &nbsp;Add To Cart &nbsp; </span>
          <span>| &nbsp;Payment &nbsp;</span>
          <span>| &nbsp;Transition & Swiper &nbsp;</span>

          <h3 id="header3">Tech Stack Used</h3>
          <a href="https://creative-profiterole-43487b.netlify.app/" target="_blank">
            <button id="aTag1">View Live</button>
          </a>

          <img
            style={{ width: "40px", height: "40px", marginLeft: "50px" }}
            src="https://cdn3d.iconscout.com/3d/free/thumb/html-5728485-4781249.png"
            alt=""
          />
          <img
            style={{ width: "40px", height: "40px", marginLeft: "5px" }}
            src="data:image/png;base64,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"
            alt=""
          />
          <img
            style={{ width: "40px", height: "40px", marginLeft: "5px" }}
            src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png"
            alt=""
          />
          <img
            style={{ width: "40px", height: "40px", marginLeft: "5px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY4nVjNclsU21J8Cr_I2w0V1zywQMCWqWDelFeAM_zNlNoP-E6Z3S-MRSqjYvv292f9PQ&usqp=CAU"
            alt=""
          />

          <a
            style={{ marginLeft: "50px" }}
            href="https://github.com/sandeepprogrammer64/Gear-Best-Clone"
            target="_blank"
          >
            <button id="aTag1">View Code</button>
          </a>
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
