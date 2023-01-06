import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import "./Header.css";

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
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h3>Sandeep</h3>
          </div>
          <div className="nav_menu">
            <ul className="nav-list">
              {navLinks.map((item, index) => {
                return (
                  <h6 className="nav-item" key={index}>
                    <a href={item.url}> {item.display}</a>
                  </h6>
                );
              })}
            </ul>
          </div>

          <div className="nav-right">
           
            <a
              href="https://drive.google.com/file/d/19m6KD4CbI6QVqQTDc-7qmghKVlGNyTqE/view?usp=sharing"
              download="Sandeep_Prajapati_Resume_.pdf"
              target="_blank"
            >
              {" "}
              <button className="btn">
                {" "}
                <b>
               View Resume
                </b>
              </button>{" "}
            </a>
            <span className="mobile-menu"></span>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
