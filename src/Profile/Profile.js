import React from "react";
import Typical from "react-typical";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container" id="home">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <h3> Hello, I'm Sandeep Prajapati</h3>
          </div>
          <div className="profile-details-role">
            <h1>
              {" "}
              <Typical
                loop={Infinity}
                steps={[
                  "A Techie ",
                  1500,
                  "A Dedicated Dev",
                  1000,
                  "A Full Stack Web Developer",
                  1000,
                ]}
              />
            </h1>
          </div>

          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://github.com/sandeepprogrammer64"
                target="blank"
                title="Github"
              >
                <i className="fa fa-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/sandeep-prajapati64/"
                target="blank"
                title="Linkedin"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com/Sandeep63259242"
                target="blank"
                title="Twitter"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/smart_swag_feb/"
                target="blank"
                title="Instagram"
              >
                <i
                  style={{ color: "red", height: "20px" }}
                  className="fa fa-instagram"
                ></i>
              </a>
            </div>
          </div>

          <div>
            <a
              href="Sandeep_Prajapati_Resume_.pdf"
              target=""
              download="Sandeep_Prajapati_Resume_.pdf"
            >
              <button className="primary-button">Get Resume</button>
            </a>
          </div>
        </div>

        <div className="profile-picture">
          <div className="profile-pic-background">
            <img
              className="avatar"
              src="https://avatars.githubusercontent.com/u/101393796?v=4"
              alt="sandeep"
            />
          </div>
        </div>
        
      </div>

    
    </div>
    
  );
}

export default Profile;
