import './About.css';
import { ReactComponent as Illustration } from "../../asset/undraw_static_website_re_x70h.svg";
const About = () => {
    return(
        <div className='about-container'>

            <div className='about__text'>

            <h1> Développeur Web <span className='red'>Front-End</span></h1>
            <p>
                Bonjour, je suis <span className='red'>Matéo</span>, diplômé d'une licence informatique de la Faculté des Sciences à Montpellier.
            </p>
            <p>
                Passionné par le développement web, j'ai acquis mes compétences en <span className='red'>autodidacte</span> grâce à des cours en ligne et à travers 
                le développement de <span className='red'>projets personnels</span>. 
            </p>
            <p>
                À la recherche d'opportunités professionnelles, je suis enthousiaste à l'idée de mettre en pratique mes connaissances afin 
                de contribuer à des projets innovants.
            </p>
            </div>

            <div className='icons'>
                <a href='https://developer.mozilla.org/fr/docs/Web/HTML'><img src='/icons/html.png' alt='html-logo'/></a>
                <a href='https://developer.mozilla.org/fr/docs/Web/CSS'><img src='/icons/css.png' alt='css-logo'/></a>
                <a href='https://developer.mozilla.org/fr/docs/Web/JavaScript'><img src='/icons/javascript.png' alt='javascript-logo'/></a>
                <a href='https://nodejs.org/en/'><img src='/icons/nodejs.png' alt='nodejs-logo'/></a>
                <a href='https://reactjs.org/'><img src='/icons/react.png' alt='react-logo'/></a>
                <a href='https://www.postgresql.org/'><img src='/icons/postgresql.png' alt='postgresql-logo'/></a>
                <a href='https://www.mongodb.com/'><img src='/icons/mongodb.png' alt='mongodb-logo'/></a>
                <a href='https://github.com/'><img src='/icons/github.png' alt='github-logo'/></a>
            </div>
            
            <Illustration className='illustration'></Illustration>
            </div>
    )
}

export default About;