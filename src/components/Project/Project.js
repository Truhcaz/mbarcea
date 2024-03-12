import './Project.css';

const Project = ({name, about, codeURL, apiURL, websiteURL, previewURL}) => {
    return(
        <div className='project'>
            <div className='project-about'>
                <h2> Projet : {name} </h2>
                <p> {about} </p>
                <div className='project-btn-container'>
                    <a href={websiteURL}  target="_blank" rel='noreferrer' className='project-btn'> Site Live</a>
                    <a href={codeURL} target="_blank" rel='noreferrer' className='project-btn'> Code Source </a>
                </div>
            </div>
           <div className='project-img'>
                <img src={'/imgs'+previewURL} alt={name}/>
           </div>
        </div>
    )
}

export default Project;