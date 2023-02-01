import './Nav.css';

const Nav = () => {
    return(
    <nav className='navigation'>
       <nav className='nav-right'>
        <a href='#projects'>Projets</a>
        <a href='#miniProjects'>Mini Projets</a>
       </nav>
       <nav className='nav-left'>
        <a href='https://github.com/Truhcaz'>Github</a>
        <a href='mailto:mateo.brc0@gmail.com?subject=Bonjour'>Mail</a>
        <a href='/'>CV</a>
       </nav>
    </nav>
    )
}

export default Nav;