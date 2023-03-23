import React from "react";
import { Link } from "react-router-dom";

const HealingMenu = () => {

    return (
        <>
            <div className="menu--padding">
                <a href="/"><img className="menu--logo" src="/Images/Logo.png" alt="brand logo: a circle made of curvivng lines and Brandon Graf"/></a>
                <div className="menu--rainbow flex">
                    <div>
                        <Link to="/healing/about"><h3>about</h3></Link>
                    </div>
                    <div>
                        <Link to="/healing/booking"><h3>booking</h3></Link>
                    </div>
                    <div>
                        <Link to="/healing/FAQ"><h3>faq</h3></Link>
                    </div>
                    <div>
                        <Link to="/healing/contact"><h3>contact</h3></Link>
                    </div>
                    <div>
                        {/* white box */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HealingMenu;