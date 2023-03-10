import { useEffect, useState } from "react";

function About() {

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
      <p>{about.attributes.Body}</p>
    </div>
  );

}

export default About;