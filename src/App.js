
import './App.css';
import React from 'react';
import Profile from './Profile/Profile';
import Layout from './Layout/Layout';
import Aboutme from './Components/About/Aboutme';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
     
      <Layout />
      <br/>
      
      <Profile />
      <Aboutme />
      <Skills />
      <Projects />
      <Contact />
      

    </div>
  );
}

export default App;
