import React from "react";
import Typical from "react-typical";


function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
             <a href="https://www.linkedin.com/in/sandeep-prajapati64/" target="blank" title="">
               <i className="fa fa-linkedin"></i>
             </a>
             <a href="https://twitter.com/Sandeep63259242" target="blank" title="">
               <i className="fa fa-twitter"></i>
             </a>
             <a href="https://www.instagram.com/smart_swag_feb/" target="blank" title="">
               <i style={{color: "red", height: "20px"}} className="fa fa-instagram"></i>
             </a>
           
          </div>
       
        <div className="profile-details-name">
           <h3> Hello, I'M Sandeep Prajapati</h3>
        </div>
        <div className="profile-details-role">
              <h1>
                {" "}
                <Typical 
                loop={Infinity}
                steps={[
                    "Sandeep Prajapati ",
                    1500,
                    "A Dedicated Dev",
                    1000,
                    "A Full Stack Web Developer",
                    1000,
                    
                ]}
                
                />

              </h1>
        </div>

        <div>
            <a href="Sandeep_Prajapati_Resume.pdf" target="" download="Sandeep_Prajapati_Resume.pdf">
            <button>Get Resume</button>
            </a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
