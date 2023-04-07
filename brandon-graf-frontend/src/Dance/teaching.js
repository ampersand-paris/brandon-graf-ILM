import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import reactMarkdown from "react-markdown";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";
import Loading from "../Partials/loading";

function Teaching() {

  const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}api/teaching?populate=*`)
  console.log(data)
  // console.log('service', data.data.attributes.services)

  let curriculas = [];
  let formats = []

  if (isLoading) {
    return <Loading />
  } 

  if (error) {
    return <div className="App"><h1>Error...</h1></div>
  }

  if (data) {
    curriculas = data.data.attributes.curricula.data;
    formats = data.data.attributes.formats.data;
    
    return (
      <>
        <div className="submenu">
          <div className="bg--red--opaque">
            <Link to="/dance/studio-services"><h3>competition choreography</h3></Link>
          </div>
          <div className="flex ai--center bg--red">
            <Link to="/dance/teaching"><h3>teaching</h3></Link>
          </div>
        </div>
        <div className="fifty--fifty--container bg--red">
          <div className="fifty--fifty--intro--text">          
            <h1 className="page--intro">{data.data.attributes.Title}</h1>
            <p>{data.data.attributes.Intro}</p>
          </div>
          <div className="flex jc--center ai--center">
            <div className="intro--video">
              <iframe src={data.data.attributes.Video_Link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div className="body--container">
          <div className="body--text">
            <h1 className="page--intro">curriculums</h1>

            <div className="curriculum--list flex column">
                {curriculas.map((curricula) => 
                <div className="service--item flex column">
                    <div className="flex ai--center">
                        <div className="shape">
                        </div>
                        <h2 className="faq--title">{curricula.attributes.Title}</h2>
                    </div>
                    <p>{curricula.attributes.Body}</p>
                </div>
                )}
            </div>
            <h1 className="page--intro">formats</h1>
            <div className="flex column">
                {formats.map((format) => 
                <div className="service--item flex">
                    <div className="">
                        <img className="formats--triangle" src="/Images/Red_Triangle.png" />
                    </div>
                    <div className="inside">
                        <h2>{format.attributes.Title}</h2>
                        <ReactMarkdown>{format.attributes.Body}</ReactMarkdown>
                    </div>
                </div>
                )}
            </div>
            <h1 className="page--intro">{data.data.attributes.Outro}</h1>
          </div>
        </div>
      </>
    )
  }

}

export default Teaching;