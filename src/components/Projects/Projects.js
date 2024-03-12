import React from 'react';
import './Projects.css';
import Project from '../Project/Project';

const Projects = ({projects, id, name}) => {
    const projectComponent = projects.map((project, i) => {
        return <Project 
            key={i} 
            name={project.name} 
            about={project.about}
            codeURL = {project.codeURL}
            apiURL = {project.apiURL}
            websiteURL = {project.websiteURL}
            previewURL = {project.previewURL}
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