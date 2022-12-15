import "./App.css";
import React from "react";
// import { useEffect, useState } from "react";
import Profile from "./Profile/Profile";
import Layout from "./Layout/Layout";
import Aboutme from "./Components/About/Aboutme";
import Projects from "./Components/Projects/Projects";

import Contact from "./Components/Contact/Contact";
import GithubStats from "./Components/GithubStats/GithubStats";


function App() {

 

 


  return (
    <div className="App">
      <Layout />
      <br />

      <Profile />
      <Aboutme />
      <Projects />
     <br />
      <GithubStats />
      <Contact />
    </div>
  );
}

export default App;
