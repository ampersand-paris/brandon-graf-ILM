import { useEffect, useState } from "react";
import useFetch from "../../useFetch";
import DanceMenu from "../../Partials/Dance/danceMenu";

function StudioServices() {

  const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}api/studio-service`)
  console.log(data)

  if (isLoading) {
    return <div className="App"><h1>Loading...</h1></div>
  }

  if (error) {
    return <div className="App"><h1>Error...</h1></div>
  }

  return (
    <>
      <div className="App">
        {/* <h1>{data.data.attributes.Intro}</h1>
        <p>{data.data.attributes.Intro_Paragraph}</p>
        <p>{data.data.attributes.Biography}</p>
        <p>{data.data.attributes.Artist_Statement}</p> */}
      </div>
    </>
  );

}

export default StudioServices;