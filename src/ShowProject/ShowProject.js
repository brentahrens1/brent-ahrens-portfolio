import React from 'react'
import './ShowProject.css'


const ShowProject = (props) => {
    return(
        <div className="show-project-container">
            <h1 className="projects-header">Projects</h1>
            <img className={`${props.project.name}`} src={props.project.img} alt={props.project.name}></img>
        </div>
    )
}


export default ShowProject