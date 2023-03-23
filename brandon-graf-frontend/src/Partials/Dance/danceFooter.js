import React from "react";
import { Link } from "react-router-dom";

const DanceFooter = () => {

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
            <div className="footer--container">
                <div className="footer--grid">
                    <div className="flex column">
                        <a href="/"><img className="footer--logo" src="/Images/Logo.png" alt="brand logo: a circle made of curvivng lines and Brandon Graf"/></a>
                        <div className="flex column mobile-flex-row mobile--ai--center">
                            <a href="https://www.instagram.com/brandon_graf95/?hl=en" target="_blank"><img className="social--icon" src="/Images/Instagram_Glyph_White.png" alt="Instagram logo"/></a>
                            <p>contact me:
                                <br></br>
                                <a href="mailto:brandongraf95@gamil.com">brandongraf95@gamil.com</a>
                            </p>
                        </div>
                    </div>
                    <div className="flex column">
                        <Link><h3>about</h3></Link>
                        <Link><h3>competition choreography</h3></Link>
                        <Link><h3>studio teaching</h3></Link>
                        <Link><h3>dance on film</h3></Link>
                        <Link><h3>contact</h3></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DanceFooter;