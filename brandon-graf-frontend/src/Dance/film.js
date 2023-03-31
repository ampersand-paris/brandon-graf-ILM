import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import reactMarkdown from "react-markdown";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Loading from "../Partials/loading";

function Film() {

  const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}api/film-page?populate=*`)
  console.log(data)
  // console.log('service', data.data.attributes.services)

  let films = [];

  if (isLoading) {
    return <Loading />
  } 

  if (error) {
    return <div className="App"><h1>Error...</h1></div>
  }

  if (data) {
    films = data.data.attributes.films.data;
    
    return (
      <>
        <div className="fifty--fifty--container bg--yellow">
          <div className="fifty--fifty--intro--text">          
            <h1 className="page--intro">{data.data.attributes.Title}</h1>
            <p>{data.data.attributes.Intro}</p>
          </div>
          <div className="flex jc--center ai--center">
            {/* <img src={data.data.attributes.Image_Link} /> */}
          </div>
        </div>
        <div className="flex">
          <div className="intro--video">
            <iframe className="film-video" src={data.data.attributes.Video_Link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
        {films.map((film) =>   
          <>
            <div className="fifty--fifty--container bg--yellow">
              <div className="fifty--fifty--intro--text">          
                <h1 className="page--intro">{film.attributes.Title}</h1>
                <ReactMarkdown>{film.attributes.Body}</ReactMarkdown>
              </div>
              <div className="flex jc--center ai--center">

              </div>
            </div>
            <div className="flex">
              <div className="intro--video">
                <iframe src={film.attributes.Video_Link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>
          </>
        )}
        <div className="body--container">
          <h1 className="page--intro">interested in collaborating?</h1>
          <div className="flex margin-top">
            <div>
              <img src="/Images/Yellow_Triangle.png"/>
            </div>
            <h1 className="margin-left">choreography</h1>
          </div>
          <div className="flex margin-top">
            <div>
              <img src="/Images/Yellow_Triangle.png"/>
            </div>
            <h1 className="margin-left">movement direction</h1>
          </div>
          <div className="flex margin-top">
            <div>
              <img src="/Images/Yellow_Triangle.png"/>
            </div>
            <h1 className="margin-left">artistic development</h1>
          </div>
          <div className="flex margin-top">
            <div>
              <img src="/Images/Yellow_Triangle.png"/>
            </div>
            <h1 className="margin-left">dancing / acting</h1>
          </div>
          <h1 className="page--intro">lets make “move” ies</h1>
          <img className="movies--triangle" src="/Images/Yellow_Triangle.png"/>
        </div>
      </>
    )
  }

}

export default Film;