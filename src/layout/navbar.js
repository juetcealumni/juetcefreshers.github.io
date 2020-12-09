import React from 'react';
import {NavLink} from 'react-router-dom'
function Navigation(props){
  return (
    <nav className="nav_pos">
      <div className="div-header main-nav">
        <div className="navLink">
        <NavLink className="link" to="/">Home</NavLink>
        <a target="_blank" rel="noopener noreferrer" href="http://www.jaduniv.edu.in/">Official Website</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/juetcefreshers/juetcefreshers.github.io/blob/main/README.md">Enhance this Website</a>
      </div>
      </div>
    </nav>
  );
}

export default Navigation;
