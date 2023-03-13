import { useEffect, useState } from "react";
import useFetch from "../../useFetch";
import DanceMenu from "../../Partials/Dance/danceMenu";

function About() {

  const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}api/about`)

  if (isLoading) {
    return <div className="App"><h1>Loading...</h1></div>
  }

  if (error) {
    return <div className="App"><h1>Error...</h1></div>
  }

  return (
    <>
      <div className="intro--container bg--lilac">
        <img src="../Images/Portraits/Brandon_Headshot.png" />
        <div className="intro--text">          
          <h1 className="page--intro">{data.data.attributes.Intro}</h1>
          <p>{data.data.attributes.Intro_Paragraph}</p>
        </div>
      </div>
      <div className="body--container">
        <div>
          <img src="../Images/Headings/Biography.png" />
          <p className="body--text">{data.data.attributes.Biography}</p>
        </div>
        <div>
          <img src="../Images/Headings/Biography.png" />
          <p className="body--text">{data.data.attributes.Artist_Statement}</p>
        </div>
      </div>
    </>
  );

}

export default About;