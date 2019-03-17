import React, { Component } from 'react'
import './ProjectContainer.css'

import ProjectSelector from '../ProjectSelector/ProjectSelector'
import ShowProject from '../ShowProject/ShowProject'
import ProjectInfo from '../ProjectInfo/ProjectInfo'


class ProjectContainer extends Component {
    state = {
        selectedProjects: 0,
        projects: [  
        {
            name: 'Free LA',
            url: 'https://freela-project5.firebaseapp.com/',
            img: "https://i.imgur.com/eVFCd51.jpg",
            description: ' "Free LA" is a full stack CRUD app built to help fellow Angelinos find free activities in their city. I broke it down into the four categories of music, nature, exercise, and art. "Free LA" is also responsive on all mobile devices."',
            tech: "Technologies used: React, Firestore, CSS3",
            github: "https://github.com/brentahrens1/freela",
            website: "https://freela-project5.firebaseapp.com/"
        },
        {
            name: 'Kick It',
            url: 'https://kickit-sneakers.herokuapp.com/',
            img: "https://i.imgur.com/lhI7oJh.png",
            description: ' "Kick it" is a fully responsive CRUD app designed for sneakerheads to upload and resell exclusive shoes.',
            tech: "Technologies used: React, Python, Flask, CSS3",
            github: "https://github.com/brentahrens1/kickit-react",
            website: "https://kickit-sneakers.herokuapp.com/"
        },
        {
            name: 'Green Spot',
            url: 'https://tranquil-badlands-36861.herokuapp.com/',
            img: "https://i.imgur.com/PwQMCMp.png",
            description: '"Green Spot" is MERN stack, mobile first web app that shines a spotlight on the vegan food truck scene in Los Angeles.',
            tech: "Technologies used: React, Express, Node, MongoDB, Passport, Google Maps API, CSS",
            github: "https://github.com/brentahrens1/GreenSpot",
            website: "https://tranquil-badlands-36861.herokuapp.com/"
        }, 
        {
            name: 'Opening Act',
            url: 'https://openingact-project2.herokuapp.com/',
            img: "https://i.imgur.com/Q6MPmph.png",
            description: '"Opening Act" is a MEN stack CRUD app that allows musicians to search for fellow artist to collaborate with and for venues to post upcoming open spots they have available.',
            tech: "Technologies used: Express, Node.js, Mongoose, MongoDB, HTML5, CSS3, SASS, Javascript",
            github: "https://github.com/brentahrens1/opening-act-project2",
            website: "https://openingact-project2.herokuapp.com/"
        },
        {
            name: 'Rock The Red',
            url: 'https://brentahrens1.github.io/capitals-slot-machine/',
            img: "https://i.imgur.com/pfRBBET.png",
            description: '"Rock The Red" is a Washington Capitals themed slot machine. Featuring dynamic audio and visual effects, triggered by the result of each spin.',
            tech: "Technologies used: JavaScript, CSS, HTML",
            github: "https://github.com/brentahrens1/capitals-slot-machine",
            website: "https://brentahrens1.github.io/capitals-slot-machine/"
        },
        ]
    }

    doChangeProject = (index) => {
        this.setState({
            selectedProjects: index
        })
    }


render() {
    const { selectedProjects, projects } = this.state
    const project = projects[selectedProjects]
    return(
        <div>
            <div className="project-container">
                <ProjectSelector
                    selectedProjects={selectedProjects} 
                    projects={projects} 
                    doChangeProject={this.doChangeProject}
                />
                <ShowProject 
                    project={project}
                />
                <ProjectInfo
                    project={project}
                />
            </div>
        </div>
        )
    }
}

export default ProjectContainer