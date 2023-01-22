import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
//import HamburgerMenu from "../HamburgerMenu";
import "./Header.css";
// import ScriptTag from "react-script-tag";

// import DrawerExample from "../DrawerExample";
import useWindowSize from "../Hooks/WindowSizehook";
import Burger from "../Burger/Burger";

const navLinks = [
  {
    display: "Home",
    url: "#home",
  },
  {
    display: "About Me",
    url: "#about me",
  },
  {
    display: "Skills",
    url: "#skills",
  },
  {
    display: "Project",
    url: "#project",
  },
  {
    display: "Contact",
    url: "#contact",
  },
];

function Header() {
  const headerRef = useRef(null);
  const [height, width] = useWindowSize();
  // console.log(width, height);
  console.log(useWindowSize());

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 5 ||
        document.documentElement.scrollTop > 5
      ) {
        headerRef.current.classList.add("header-shrink");
      } else {
        headerRef.current.classList.remove("header-shrink");
      }
    });

    return () => {
      window.removeEventListener("scroll", headerRef);
    };
  }, []);

  

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="navBar">
        
          <div className="logo">
            <h3>Sandeep Prajapati.</h3>
          </div>
          <div className="nav_menu">
            {width > 950 ? 
            <ul className="nav-list">
              {navLinks.map((item, index) => {
                return (
                  <h6 className="nav-item" key={index}>
                    <a href={item.url}> {item.display}</a>
                  </h6>
                );
              })}
            </ul> : <Burger />
}
          </div>

          <div className="nav-right">
            <a
              href="Sandeep_Prajapati_Resume_.pdf"
              onclick="openTab()"
              target="_blank"
            >
              {" "}
              <button className="btn">
                {" "}
                <b>View Resume</b>
              </button>{" "}
            </a>
          </div>
        </div>
      </Container>
     
    </header>
  );
}

export default Header;
