import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'

function Cancel_or_Rebook() {

  const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}api/rebook-and-cancellation`)
    console.log(data)

  if (isLoading) {
    return <div className="App"><h1>Loading...</h1></div>
  }

  if (error) {
    return <div className="App"><h1>Error...</h1></div>
  }

  if (data) {

    return (
    <>
      <div className="body--container intro--container ">
        <div className="rebook--width">
          <h1 className="page--intro">{data.data.attributes.Title}</h1>
          <ReactMarkdown>{data.data.attributes.Body}</ReactMarkdown>
        </div>
      </div>
    </>
  );
  }
}

export default Cancel_or_Rebook;