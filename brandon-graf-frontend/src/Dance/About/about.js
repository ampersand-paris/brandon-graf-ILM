import { useEffect, useState } from "react";
import useFetch from "../../useFetch";
import DanceMenu from "../../Partials/Dance/danceMenu";
import ReactMarkdown from 'react-markdown'

function About() {

  const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}api/about`)
  console.log(data)

  if (isLoading) {
    return <div className="App"><h1>Loading...</h1></div>
  }

  if (error) {
    return <div className="App"><h1>Error...</h1></div>
  }

  return (
    <>
      <div className="intro--container bg--lilac">
        <div className=" flex column jc--center">
          <img className="headshot" src="../Images/Portraits/Brandon_Headshot.png" />
        </div>
        <div className="intro--text">          
          <h1 className="page--intro">{data.data.attributes.Intro}</h1>
          <p>{data.data.attributes.Intro_Paragraph}</p>
        </div>
      </div>
      <div className="body--container">
        <div className="grid--container">
          <div>
            <img className="about--header" src="../Images/Headings/Biography.png" />
          </div>
          <p className="body--text body--text--margin"><ReactMarkdown>{data.data.attributes.Biography}</ReactMarkdown></p>
        </div>
        <div className="grid--container">
          <div>
            <img className="about--header" src="../Images/Headings/Artist_Statement.png" />
          </div>
          <p className="body--text body--text--margin"><ReactMarkdown>{data.data.attributes.Artist_Statement}</ReactMarkdown></p>
        </div>
      </div>
    </>
  );

}

export default About;