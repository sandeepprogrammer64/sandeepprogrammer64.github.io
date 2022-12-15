import React from 'react';
//import GitHubCalendar from "react-github-calendar";
import "./GithubStats.css";

function GithubStats() {
  return <div className='stats-header'>
    <img className='stat-1' src="https://github-readme-stats.vercel.app/api/top-langs?username=sandeepprogrammer64&show_icons=true&locale=en&layout=compact" alt="" />
    <img className='stat-2' src="https://github-readme-stats.vercel.app/api?username=sandeepprogrammer64&show_icons=true&locale=en" alt="" />
  
  </div>
}

export default GithubStats;