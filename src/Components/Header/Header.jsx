import React, {useRef, useEffect} from 'react';
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

  const headerRef = useRef(null);


  useEffect(() =>
  {
     window.addEventListener("scroll", () =>{
          if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
          {
               headerRef.current.classList.add("header-shrink")
          }
          else
          {
               headerRef.current.classList.remove("header-shrink")
          }
     });

     return() =>
     {
          window.removeEventListener("scroll", headerRef);
     };
  }, [])

//   const handleClick = (e) =>
//   {
//       e.preventDefault();
//       const targetedAttr = e.target.getAttribute("href");
//       const location  = document.querySelector(targetedAttr).offsetTop;

//       window.scroll({
//           left:0,
//           top: location-70,
//       });

//   };




  return <header className='header' ref={headerRef} >
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
                     <a href={item.url} > {item.display}</a>
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