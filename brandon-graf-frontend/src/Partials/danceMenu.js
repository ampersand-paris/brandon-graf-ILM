import React from "react";
import { Link } from "react-router-dom";

const DanceMenu = () => {

    return (
        <>
            <div className="menu--padding">
                <a href="/"><img className="menu--logo" src="Images/Logo.png" alt="brand logo: a circle made of curvivng lines and Brandon Graf"/></a>
                <div className="menu--rainbow flex">
                    <div>
                        <Link><h3>about</h3></Link>
                    </div>
                    <div>
                        <Link><h3>studio services</h3></Link>
                    </div>
                    <div>
                        <Link><h3>film</h3></Link>
                    </div>
                    <div>
                        <Link><h3>contact</h3></Link>
                    </div>
                    <div>
                        {/* white box */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DanceMenu;