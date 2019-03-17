import React from 'react'
import './Experience.css'

const Experience = () => {
    return(
        <div className="experience-container">
            <h1 className="experience-header">Experience</h1>
        <div className="card-container">
          <div class="job_card" id="bright">
            <div class="info_section">
              <div class="job_header">
                <img class="locandina" src="http://iyftc1oqf704bytwz45ub151.wpengine.netdna-cdn.com/wp-content/uploads/2014/05/BeastieBoys_ChungKing_HipHop.jpg"/>
                <h1>Chung King Studios</h1>
                <h4>Assistant Engineer/Engineer/Operations Manager</h4>
              </div>
              <div class="job_desc">
                <p class="text">
                  - Assistant Engineer/Engineer on sessions for Nas, Black Eyed Peas, Lil Wayne, Common and many more established artists<br></br>
                  - Troubleshot technical issues, recalled mixes on NEVE VR and SSL consoles, and organized
                    set up for live rooms, vocal booths, and control rooms<br></br>
                  - Managed operations such as equipment inventory, studio expenses, and intern program<br></br>
                </p>
              </div>
            </div>
            <div class="blur_back bright_back"></div>
          </div>
          <div class="job_card" id="ave">
            <div class="info_section">
              <div class="job_header">
                <img class="locandina" src="https://media.glassdoor.com/sqll/876929/ace-hotel-squarelogo-1443074314802.png"/>
                <h1>ACE Hotel NYC</h1>
                <h4>Guest Service Agent</h4>
              </div>
              <div class="job_desc">
                <p class="text">
                  - Led a team of six agents focused on providing quality customer service at one of New York
                    City's premier hotels.<br></br>
                  - Worked with high profile clients in a concierge capacity assisting with standard
                    hotel services and amenities as well as ad hoc special requests and projects.<br></br> 
                  - Acted as a liaison between the GSA dept and hotel lead staff, helping to advocate and negotitate on behalf of my team. 
                </p>
              </div>
            </div>
            <div class="blur_back ave_back"></div>
          </div>
          </div>
        </div>
    )
}

export default Experience