import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'

function App() {

  const [about, setAbout ] = useState([]);

  useEffect(() => {
    update()
  }, [])


  function update() {
    console.log(`${process.env.REACT_APP_BACKEND}api/about`)
    fetch(`${process.env.REACT_APP_BACKEND}api/about`)
      .then(res => res.json())
      .then(about => {
        console.log(about)
        setAbout(about.data)
      })
  }

  return (
    <div className="App">
      <h1>hello</h1>
      <ReactMarkdown>{about.attributes.Body}</ReactMarkdown>
    </div>
  );
}

export default App;
