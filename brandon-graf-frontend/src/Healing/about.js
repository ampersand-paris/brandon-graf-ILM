import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import ReactMarkdown from 'react-markdown'

function HealingAbout() {

  const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}api/healing-about?populate=*`)
  const [index, setIndex] = useState(0)
  console.log(data)

  let testimonials = [];

  const onClickNext = () => {
      if (index + 1 === testimonials.length){
          setIndex(
              0
            )
        } else {
            setIndex(
                index + 1
            )
        }
  }

  const onClickPrevious= () => {
    if (index - 1 === -1 ){
          setIndex( 
            testimonials.length - 1
          )
      } else {
          setIndex(
              index - 1
          )
      }
  }

  if (isLoading) {
    return <div className="App"><h1>Loading...</h1></div>
  }

  if (error) {
    return <div className="App"><h1>Error...</h1></div>
  }

  if (data) {
    testimonials = data.data.attributes.testimonials.data
    console.log(testimonials)

    return (
    <>
      <div className="body--container">
        <div className="grid--container">
            <div className="flex column ai--center">
                <img className="headshot--healing--about" src="../Images/Portraits/Brandon_Headshot.png" />
                <div className="purple--line"></div>
            </div>
            <div className="body--text">
                <h1 className="page--intro">{data.data.attributes.About_Header}</h1>
                <p><ReactMarkdown>{data.data.attributes.About_Body}</ReactMarkdown></p>
            </div>
            
        </div>
        <div className="grid--container">
            <div className="flex column ai--center">
                <img className="ilm--logo--healing--page" src="../Images/ilm_logo.png" />
                <div className="purple--line"></div>
            </div>
            <div className="body--text">
                <h1 className="page--intro">{data.data.attributes.ILM_Header}</h1>
                <p><ReactMarkdown>{data.data.attributes.ILM_Body}</ReactMarkdown></p>
                <div className="intro--video">
                    <iframe src={data.data.attributes.Video_Link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <h1 className="page--intro">testimonials</h1>
                <div className="testimonial--container flex jc--space--btwn ai--center">
                    <img className="testimonial--button mirror--image" src="../Images/Yellow_Triangle.png" onClick={onClickPrevious} />
                    <div className="flex column testimonials">
                        <p>{testimonials[index].attributes.Quote}</p>
                        <p>- {testimonials[index].attributes.Author}</p>
                    </div>
                    <img className="testimonial--button" src="../Images/Yellow_Triangle.png" onClick={onClickNext} />
                </div>
          </div>
        </div>
      </div>
    </>
  );
  }
}

export default HealingAbout;