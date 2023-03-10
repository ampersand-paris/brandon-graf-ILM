import React from "react";
import { Link } from "react-router-dom";
import HealingFooter from "./healingFooter";

const HealingMenu = () => {

    return (
        <>
            <div className="menu--padding">
                <a href="/"><img className="menu--logo" src="Images/Logo.png" alt="brand logo: a circle made of curvivng lines and Brandon Graf"/></a>
                <div className="menu--rainbow flex">
                    <div>
                        <Link><h3>about</h3></Link>
                    </div>
                    <div>
                        <Link><h3>booking</h3></Link>
                    </div>
                    <div>
                        <Link><h3>faq</h3></Link>
                    </div>
                    <div>
                        <Link><h3>contact</h3></Link>
                    </div>
                    <div>
                        {/* white box */}
                    </div>
                </div>
            </div>
            <HealingFooter />
        </>
    )
}

export default HealingMenu;