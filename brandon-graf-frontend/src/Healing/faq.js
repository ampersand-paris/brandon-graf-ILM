import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import Loading from "../Partials/loading";

function FAQ() {

  const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}api/faq-page?populate=*`)
  console.log(data)

  let faqs = [];

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <div className="App"><h1>Error...</h1></div>
  }

  if (data) {
    faqs = data.data.attributes.faqs.data

    return (
    <>
      <div className="body--container intro--container flex column"> 
        <h1 className='page--intro'>{data.data.attributes.Title}</h1>
        <h1 className="faq--intro">{data.data.attributes.Intro}</h1>
        <div className="faq--list">
          {faqs.map((faq) => 
            <div className="faq--item flex column">
              <div className="flex ai--center">
                <div className="bullet">
                </div>
                <h2 className="faq--title">{faq.attributes.Question}</h2>
              </div>
              <div>
                <p>{faq.attributes.Answer}</p>
              </div>
            </div>
            )}
        </div>
        <div className="body--text">
          <h1 className="page--intro">{data.data.attributes.Outro}</h1>
          <img className="yellow--triangle" src="/Images/Yellow_Triangle.png" />
        </div>
      </div>
    </>
  );
  }
}

export default FAQ;