import './About.css';

const About = () => {
    return(
        <div className='about-container'>
            <img 
            className='profil-pct'
            src='/moi.png'
            alt='me'
            />
            <h1>Bonjour, je suis <span className='underline'>Matéo</span></h1>
            <p> Anciennement étudiant à la <span className='bold'> Faculté des Sciences de Montpellier </span>,  j'ai obtenu une <span className='underline'>Licence en Informatique</span>. </p>
            <p> Pendant cette formation j'ai décidé de me spécialiser vers le domaine qui me plaisait le plus, qui est le développement Web. </p>
            <p> Je me suis formé, seul, en suivant des cours sur <span className='bold'> Udemy </span> et en <span className='bold'> créant des applications web</span> qui m'ont permis d'apprendre les différents langages/framewor/librairies du web et leur utilisation à travers différents cas pratiques. </p>
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
            
            </div>
    )
}

export default About;