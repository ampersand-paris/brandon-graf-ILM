import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import { Link } from "react-router-dom"
import Loading from "../Partials/loading";

function StudioServices() {

  const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}api/studio-service?populate=*`)
  console.log(data)
  // console.log('service', data.data.attributes.services)

  let services = [];

  if (isLoading) {
    return <Loading />
  } 

  if (error) {
    return <div className="App"><h1>Error...</h1></div>
  }

  if (data) {
    services = data.data.attributes.services.data;
    console.log("services", services)
    
    return (
      <>
        <div className="submenu bg--red">
          <div>
            <Link to="/dance/studio-services"><h3>competition choreography</h3></Link>
          </div>
          <div className="flex ai--center">
            <Link to="/dance/teaching"><h3>teaching</h3></Link>
          </div>
        </div>
        <div className="fifty--fifty--container bg--red">
          <div className="fifty--fifty--intro--text">          
            <h1 className="page--intro">{data.data.attributes.Competition_Choreography}</h1>
            <p>{data.data.attributes.Comp_Choreo_Description}</p>
          </div>
          <div className="flex jc--center ai--center">
            <div className="intro--video">
              <iframe src={data.data.attributes.Video_Link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div className="body--container">
          <h1 className="page--intro">services</h1>
          <div className="services--list">
            {services.map((service) => 
              <div className="service--item flex">
                <div className="bullet">
                </div>
                <div className="inside">
                  <h2>{service.attributes.Service_Name}</h2>
                  <div className="service--details">
                    <h3>{service.attributes.Service_Description}</h3>
                    <h3>{service.attributes.Price}</h3>
                  </div>
                </div>
              </div>
            )}
          </div>
          <h1 className="page--intro">let's make moves together!</h1>
          <img className="red--triangle" src="../Images/Red_Triangle.png" />
        </div>
      </>
    )
  }

}

export default StudioServices;