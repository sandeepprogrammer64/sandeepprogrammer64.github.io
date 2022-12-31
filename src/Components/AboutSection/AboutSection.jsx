import React from "react";
import "./AboutSection.css";
function AboutSection() {
  return (
    <section id="about me">
      <h2 id="about_header">About Me</h2>
      <div id="About_section">
        <div id="apna_image">
          <img src="Sandeep_Photo.jpg" alt="" />
        </div>
        <div>
          <h4 id="intro">
            Hi, I am Sandeep Prajapati from Lunglei, Mizoram. I developed my
            interset in Web Development when I was working as an Account's
            Intern in Delhi. Collaboration with the I.T Department in the
            Company made me join Full Stack Web Development Course from Masai
            School. Till Now, I have designed several group as well as
            Individual Web Applications from scratch. Looking forward to joining
            an Organization to continue to grow my skillset for the upliftment
            of the Organization . Together We'll achieve Massive Goals.
          </h4>
          <h4>Apart from being a Developer, My Interests are </h4>
          <b style={{ marginLeft: "30px" }}>Travelling</b>{" "}
          <img
            className="interest_IMG"
            src="https://cdn-icons-png.flaticon.com/512/826/826070.png"
            alt=""
          />
          <br />
          <b style={{ marginLeft: "30px" }}>Playing Cricket</b>{" "}
          <img
            className="interest_IMG"
            src="https://icon2.cleanpng.com/20180405/aoe/kisspng-indian-premier-league-india-national-cricket-team-cricket-5ac5b15c5b27d9.4953427415229054363734.jpg"
            alt=""
          />
          <br />
          <b style={{ marginLeft: "30px" }}>Jogging</b>{" "}
          <img
            className="interest_IMG"
            src="https://cdn-icons-png.flaticon.com/512/1869/1869509.png"
            alt=""
          />
          <br />
          <b style={{ marginLeft: "30px" }}>Listening Music</b>{" "}
          <img
            className="interest_IMG"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3spYrZ8cfHpixEewCUC3No-5wh1_m59qQmB0NAo4b9rv9RJ6MnTwq7heKPf08r3AI1Yc&usqp=CAU"
            alt=""
          />
          <br />
        </div>
      </div>

      <h2 id="skill_header">Skills</h2>
    </section>

    
  );
}

export default AboutSection;
