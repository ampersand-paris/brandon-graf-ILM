import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import Loading from "../Partials/loading";

function ILMContact() {

  const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}api/ILM-Contact`)
    console.log(data)

  if (isLoading) {
    return  <Loading />
  }

  if (error) {
    return <div className="App"><h1>Error...</h1></div>
  }

  if (data) {

    return (
    <>
      <div className="body--container intro--container ">
        <div className="rebook--width">
          <div className="pea--shoot--circle"></div>
          <div className="healing--contact--info">
            <h1 className="page--intro">{data.data.attributes.Title}</h1>
            <div className="flex ac--center">
                <Link to={data.data.attributes.Email_Link}><h2>{data.data.attributes.Email}</h2></Link>
            </div>
            <div className="flex ai--center">
                <img className="social--icon" src="../Images/Instagram_Glyph_White.png" alt="Instagram logo"/>
                <Link to={data.data.attributes.Instagram_Link}><h2>{data.data.attributes.Instagram}</h2></Link>
            </div>
            <div className="flex">
                <Link to={data.data.attributes.Facebook_Link}><h2>{data.data.attributes.Facebook}</h2></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  }
}

export default ILMContact;