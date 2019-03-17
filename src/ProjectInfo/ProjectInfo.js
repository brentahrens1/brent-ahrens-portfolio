import React from 'react'
import './ProjectInfo.css'

const ProjectInfo = (props) => {
    return(
        <div className="project-info-container">
                <h1 className={`${props.project.name}`}>{props.project.name}</h1>
                <p className={`${props.project.name}`}>{props.project.description}</p>
                <h4 className={`${props.project.name}`}>{props.project.tech}</h4>
                <div className="socaial-btn-flex">
                    <a href={props.project.github}><button className="social-btn">GitHub</button></a>
                    <a href={props.project.website}><button className="social-btn">Website</button></a>
                </div>
        </div>
    )
}


export default ProjectInfo