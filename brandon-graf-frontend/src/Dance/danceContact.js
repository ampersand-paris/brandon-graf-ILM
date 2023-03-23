import { useEffect, useState } from "react";
import useFetch from "../useFetch";

function DanceContact() {

  const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}api/dance-contact`)
  console.log(data)

  if (isLoading) {
    return <div className="App"><h1>Loading...</h1></div>
  } 

  if (error) {
    return <div className="App"><h1>Error...</h1></div>
  }

  if (data) {
    const url = `https://www.instagram.com/${data.data.attributes.Instagram}/?hl=en`
    const emailURL = `mailto:${data.data.attributes.Email}`
    
    return (
      <>
        <div className="fifty--fifty--container bg--pea--shoot">
          <div className="">          
            <h1 className="page--intro">{data.data.attributes.Intro}</h1>
            <a href={ emailURL }><h2>{data.data.attributes.Email}</h2></a>
            <a className="flex ai--center" href={ url } target="_blank"><img className="social--icon" src="../Images/Instagram_Glyph_White.png" alt="Instagram logo"/><h2>{data.data.attributes.Instagram}</h2></a>
          </div>
        </div>
      </>
    )
  }

}

export default DanceContact;