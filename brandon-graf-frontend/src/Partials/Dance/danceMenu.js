import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import About from "../../Dance/About/about";
import DanceFooter from "./danceFooter";

const DanceMenu = () => {

    return (
        <div>
            <div className="menu--padding">
                <a href="/"><img className="menu--logo" src="../Images/Logo.png" alt="brand logo: a circle made of curvivng lines and Brandon Graf"/></a>
                <div className="menu--rainbow flex">
                    <div>
                        <Link to="/dance/about"><h3>about</h3></Link>
                    </div>
                    <div>
                        <Link to="/dance/studio-services"><h3>studio services</h3></Link>
                    </div>
                    <div>
                        <Link to="/dance/film"><h3>film</h3></Link>
                    </div>
                    <div>
                        <Link to="/dance/contact"><h3>contact</h3></Link>
                    </div>
                    <div>
                        {/* white box */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DanceMenu;