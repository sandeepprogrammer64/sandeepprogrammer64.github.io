import "./App.css";
import React from "react";
import Profile from "./Profile/Profile";
import Layout from "./Layout/Layout";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import GithubStats from "./Components/GithubStats/GithubStats";
import AboutSection from "./Components/AboutSection/AboutSection";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Layout />

      <Profile />

      <AboutSection />
      <Skills />
      <Projects />
      <br />
      <GithubStats />
      <Contact />
    </div>
  );
}

export default App;
