import React from "react";
import { Link } from "react-router-dom";

function Landing() {

  return (
    <div className="landing--page">
      <img className="landing--page--logo" src="/Images/Logo.png" alt="brand logo: a circle made of curvivng lines and Brandon Graf"/>
      <div className="landing--page--menu flex column">
        <div className="flex">
            <h1>
                <Link to='/dance/about'>dance</Link>
            </h1>
            <h1>|</h1>
            <h1>
                <Link to='/healing/about'>healing</Link>
            </h1>
        </div>
        <div className="rainbow--bar">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
