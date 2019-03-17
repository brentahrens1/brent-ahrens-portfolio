import React from 'react'
import './MainInfo.css'

const MainInfo = () => {
    return(
        <div className="main-container">
            <div className="picture-info-flex">
                <div className="info-flex">
                    <h1 className="name-main">Brent Ahrens</h1>
                    <p className="description-main">I'm a full stack web developer eager to work in a demanding and 
                        dynamic role that compliments my passion for MERN based technologies 
                        and leverages my extensive experience in client facing roles.</p>
                    <p className="email-main">Email: brentholmesahrens@gmail.com</p>
                    <p className="phone-main">Phone: (301)606-3561</p>
                    <p className="location-main">Los Angeles, CA</p>
                    <div className="logo-main-flex">
                        <a href="https://github.com/brentahrens1"><p className="social-link">GitHub</p></a>
                        <a href="https://www.linkedin.com/in/brent-ahrens-137545144/"><p className="social-link">LinkedIn</p></a>
                    </div>
                </div>
                <img className="picture-main" src="https://i.imgur.com/px1gbho.jpg" alt="profile"/>
                <p className="skills-text">Skills - React | Node.js | MongoDB | Python | JavaScript | CSS3 | SASS | HTML5 | Firebase | Socket io | jQuery | Git | Restful Routes</p>
            </div>
        </div>
    )
}

export default MainInfo