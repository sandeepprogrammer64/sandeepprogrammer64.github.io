import "./App.css";
import React, { useEffect, useState } from "react";
import Profile from "./Profile/Profile";
import Layout from "./Layout/Layout";
import Aboutme from "./Components/About/Aboutme";
import Projects from "./Components/Projects/Projects";

import Contact from "./Components/Contact/Contact";


function App() {

 

 


  return (
    <div className="App">
      <Layout />
      <br />

      <Profile />
      <Aboutme />
      <Projects />

      <Contact />
    </div>
  );
}

export default App;
