


import { scaleDown as Menu } from 'react-burger-menu'

import "./Burger.css"
// const showSettings  = (event) => {
//     return event.preventDefault();
   
//   }

  const Burger = () => {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a  className="menu-item" href="#home">Home</a>
        <a className="menu-item" href="#about me">About Me</a>
        <a className="menu-item" href="#skills">Skills</a>
        <a className="menu-item" href="#project">Projects</a>
        <a className="menu-item" href="#contact">Contact</a>
        <a href="https://drive.google.com/file/d/19m6KD4CbI6QVqQTDc-7qmghKVlGNyTqE/view?usp=share_link" target="_blank" rel="noreferrer">View Resume</a>
        {/* <a onClick={ showSettings } className="menu-item--small" href="">Settings</a> */}
      </Menu>
    );
  }

  export default Burger;
