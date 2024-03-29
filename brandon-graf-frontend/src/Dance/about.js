import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import ReactMarkdown from 'react-markdown'
import Loading from "../Partials/loading";

function About() {

  const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}api/about`)
  console.log(data)

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <div className="App"><h1>Error...</h1></div>
  }

  return (
    <>
      <div className="intro--container--grid bg--lilac">
        <div className="flex column jc--center ai--center">
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
          <div className="body--text">
            <p className="body--text--margin"><ReactMarkdown>{data.data.attributes.Artist_Statement}</ReactMarkdown></p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="intro--video">
          <iframe src={data.data.attributes.Video_Link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>
  );

}

export default About;