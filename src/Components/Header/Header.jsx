import React from 'react';
import {Container} from "reactstrap";
import "./Header.css";

const navLinks = [
    {
         display: "Home",
         url: "#home"
    },
    {
         display: "About Me",
         url: "#about me"
    },
    {
         display: "Skills",
         url: "#skills"
    },
    {
         display: "Project",
         url: "#project"
    },
    {
         display: "Contact",
         url: "#contact"
    },
]

function Header() {
  return <header className='header'>
    <Container>
        <div className='navigation d-flex align-items-center justify-content-between' >
            <div className="logo">
                <h3>Sandeep</h3>
            </div>
            <div className="nav_menu">
           <ul className='nav-list'>
            {navLinks.map((item, index) =>
                {
                     return <li className='nav-item' key={index}>
                     <a href={item.url}> {item.display}</a>
                 </li>
                })
            }
            
           </ul>
        </div>
          <div className="nav-right d-flex align-items-center gap-4">
            <button className='btn'> Let's Talk</button>
            <span className='mobile-menu'>
            <i className="fa fa-whatsapp"></i>
            </span>
          </div>
        </div>
      
    </Container>

  </header>
}

export default Header