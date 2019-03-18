import React from 'react'
import './Education.css'

const Education = () => {
    return(
        <div className="education-container">
        <h1 className="education-header">Education</h1>
            <img className="education-background-image" src="https://i.imgur.com/TAqvGVp.jpg" alt="education"/>
            <div className="cards__item">
                <div className="card">
                    <img className="card__image card__image--fence" alt="eventimg" src="https://static-assets.generalassemb.ly/logos/generalassembly-open-graph.png"/>
                    <div className="card__content">
                        <div className="showcard-bottom">
                            <div className="card__title">General Assembly - Web Development Immersive</div>
                        </div>
                        <div className="showcard-bottom">
                            <div className="card__title">2018-2019</div>
                        </div>
                        <div className="showcard-bottom">
                            <p className="card__text">                       
                                - Completed (700+ hour) immersive web development course.<br></br>
                                - Extensive training in the MERN stack and DB development<br></br></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cards__item2">
                <div className="card">
                    <img className="card__image card__image--fence" alt="eventimg" src="https://www.musicconnection.com/wp-content/uploads/2014/01/cras1.jpg"/>
                    <div className="card__content">
                        <div className="showcard-bottom">
                            <div className="card__title">Conservatory of Recording Arts and Sciences</div>
                        </div>
                        <div className="showcard-bottom">
                            <p className="card__text">                       
                                - Studied the Recording, Mixing, and Mastering processes<br></br>
                                - Trained in Live Sound, Post Production and Music Business<br></br>
                                - Certified in Antares Autotune and Pro Tools
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education