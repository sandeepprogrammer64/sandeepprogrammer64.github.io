import React from 'react';
//import GitHubCalendar from "react-github-calendar";
import "./GithubStats.css";





function GithubStats() {
  return <div className='stats-header'>
    <img className='stat-1' src="https://github-readme-stats.vercel.app/api/top-langs?username=sandeepprogrammer64&show_icons=true&locale=en&layout=compact&theme=holi-theme" alt="" />
    <img className='stat-2' src="https://github-readme-stats.vercel.app/api?username=sandeepprogrammer64&show_icons=true&locale=en" alt="" />
    <img className='stat-3' src="https://github-readme-streak-stats.herokuapp.com?user=sandeepprogrammer64&theme=holi-theme" alt="" />
 
  </div>
  
}

export default GithubStats;