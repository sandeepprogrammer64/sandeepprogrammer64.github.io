import React from 'react';
import GitHubCalendar from "react-github-calendar";
import "./GithubStats.css";





function GithubStats() {
  return <div className='stats-header'>
    
    <img className='stat-1' src="https://camo.githubusercontent.com/3b74c0cf01b29d940e951a73bf12f7fe1e4877d50de07d737ab7310c4f8c70fa/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d73616e6465657070726f6772616d6d657236342673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374" alt="" />
    <img className='stat-2' src="https://camo.githubusercontent.com/28a5e9c02c3cd180848209803df23f2a7bda6e382b5d59ef3e41bf9599d4aeee/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d73616e6465657070726f6772616d6d657236342673686f775f69636f6e733d74727565266c6f63616c653d656e" alt="" />
    <img className='stat-3' src="https://github-readme-streak-stats.herokuapp.com?user=sandeepprogrammer64" alt="" />
    <br /><br /><br />
    <GitHubCalendar
        username="sandeepprogrammer64"
        blockSize={15}
        // blockMargin={5}
        color="#40C463"
        fontSize={16}
      >
     </GitHubCalendar>   
          <br /><br />
          <br /><br />
          <hr />
  </div>

  
  
}

export default GithubStats;