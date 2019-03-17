import React from 'react'
import './ProjectSelector.css'

const ProjectSelector = (props) => {
    return(
        <div className="selector-container">
            { props.projects.map((p, i) =>
                <button onClick={() => props.doChangeProject(i)}>{p.name}</button>
                )
            }
        </div>
    )
}

export default ProjectSelector