import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import Loading from "../Partials/loading";

function NewClient() {

  const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}api/steps`)
  console.log(data)

  let steps = [];

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <div className="App"><h1>Error...</h1></div>
  }

  if (data) {
    steps = data.data

    return (
    <>
      <div className="body--container intro--container flex column">
        {steps.map((step, i) => 
            <div className="steps--container">
              <img className="steps--triangle" src="/Images/Red_Triangle.png" />
              <div className="step--information">
                <h1 className="page--intro">step {i + 1}</h1>
                <Link className="underline" to={step.attributes.Link} target="_blank"><h2>{step.attributes.Title}</h2></Link>
                <p>{step.attributes.Instruction}</p>
              </div>
            </div>
            )}
      </div>
    </>
  );
  }
}

export default NewClient;