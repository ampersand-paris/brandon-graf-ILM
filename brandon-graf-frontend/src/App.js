import logo from './logo.svg';
import './App.css';
import appHeight from "./appHeight" // Needs to be imported to work

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'

function App() {

  return (
    <div className="landing--page">
      <img className="landing--page--logo" src="/Images/Logo.png" />
      <div className="landing--page--menu flex column">
        <div className="flex">
          <h1>
            {/* <Link
              to='/dance/about'>
            dance</Link> */}
            dance
          </h1>
          <h1>|</h1>
          <h1>
            {/* <Link
              to='/healing/about'>
            healing</Link> */}
            healing
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

export default App;
