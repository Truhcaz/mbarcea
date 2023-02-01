import React from 'react';
import './Projects.css';
import Project from '../Project/Project';

const Projects = ({projects, id, name}) => {
    const projectComponent = projects.map((user, i) => {
        return <Project 
            key={i} 
            name={projects[i].name} 
            about={projects[i].about}
            technologies={projects[i].technologies}
            codeURL = {projects[i].codeURL}
            apiURL = {projects[i].apiURL}
            websiteURL = {projects[i].websiteURL}
            previewURL = {projects[i].previewURL}
        />
    })
    return(
        <div id={id} className={id}>
            <h1> {name} : </h1>
           {projectComponent}
        </div>
    )   
}

export default Projects;