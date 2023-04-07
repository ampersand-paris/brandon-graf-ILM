import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import Loading from "../Partials/loading";

function Booking() {

  const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}api/booking`)
    console.log(data)

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <div className="App"><h1>Error...</h1></div>
  }

  if (data) {

    return (
    <>
      <div className="body--container intro--container flex ai--center jc--space--btwn mobile--column">
        <div className="red--circle flex ai--center jc--center">
            <Link to={data.data.attributes.New_Client_Link}><h2>{data.data.attributes.New_Client}</h2></Link>
        </div>
        <div className="red--circle flex ai--center jc--center">
            <Link to={data.data.attributes.Returning_Client_Link} target="_blank"><h2>{data.data.attributes.Returning_Client}</h2></Link>
        </div>
        <div className="red--circle flex ai--center jc--center">
            <Link to={data.data.attributes.Cancel_or_Rebook_Link}><h2>{data.data.attributes.Cancel_or_Rebook}</h2></Link>
        </div>
      </div>
    </>
  );
  }
}

export default Booking;