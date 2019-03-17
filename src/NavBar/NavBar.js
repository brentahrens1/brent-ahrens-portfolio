import React from 'react'
import './NavBar.css'

const NavBar = () => {
    return(
        <div>
            <div className="nav-container">
                <h4 className="nav-name">Brent Ahrens | Full Stack Web Developer</h4>
                <ul className="nav-flex">
                    <a href="#education"><h4><li className="list-item">Education</li></h4></a>   
                    <a href="#experience"> <h4><li className="list-item">Experience</li></h4></a>
                    <a href="#project"><h4><li className="list-item">Projects</li></h4></a>
                    <a href="#home"><h4><li className="list-item">Home</li></h4></a>
                </ul>  
            </div>    
        </div>
    )
}

export default NavBar