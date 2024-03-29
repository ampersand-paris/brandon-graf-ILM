import React from "react";
import { Link } from "react-router-dom";

const HealingFooter = () => {

    return (
        <>
            <div className="footer--rainbow--bar">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="footer--container healing--footer">
                <div className="footer--grid">
                    <div className="flex column">
                        <img className="footer--logo" src="/Images/ilm_logo.png" alt="ilan lev movement logo: i l m"/>
                        <div className="flex">
                            <a href="https://www.instagram.com/brandongraf_movement/?hl=en" target="_blank"><img className="social--icon" src="/Images/instagram_icon_lilac.png" alt="Instagram logo"/></a>
                            {/* <a href="" target="_blank"><img className="social--icon" src="/Images/facebook_icon.png" alt="Instagram logo"/></a> */}
                        </div>    
                        <p>contact me:
                            <br></br>
                            <a className='lilac--text' href="mailto:graf.brandon.ilm@gmail.com">graf.brandon.ilm@gmail.com</a>
                        </p>
                    </div>
                    <div className="flex column">
                        <Link to="/healing/about"><h3>about</h3></Link>
                        <Link to="/healing/booking"><h3>booking</h3></Link>
                        <Link to="/healing/faq"><h3>faq</h3></Link>
                        <Link to="/healing/contact"><h3>contact</h3></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HealingFooter;