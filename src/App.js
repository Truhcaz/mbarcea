import React from 'react';
import './styles/App.css';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Projects from './components/Projects/Projects';


function App() {
  
  const projectsList = [
    {
      name:'Magic Eye',
      about: "Une React Web App pour détecter les visages sur une image grâce à ClarifaiAPI, avec l'utilisation d'une base de donnée PostgresSQL.",
      codeURL:'https://github.com/Truhcaz/magic-eye',
      apiURL:'https://github.com/Truhcaz/magic-eye-api',
      websiteURL:'https://magic-eye.onrender.com/',
      previewURL:'/MagicEyePreview.png'
    },
    {
      name:'Pokedex App',
      about: "Un pokedex pour les 151 premiers pokemon via l'API PokeAPI",
      codeURL:'https://github.com/Truhcaz/pokedex',
      apiURL:'',
      websiteURL:'https://truhcaz.github.io/pokedex',
      previewURL:'/PokedexPreview.png'
    },
    {
      name:'GoToEgypt',
      about: "Landing Page pour une agence de voyage en egypte fictive",
      codeURL:'https://github.com/Truhcaz/gotoegypt',
      apiURL:'',
      websiteURL:'https://truhcaz.github.io/gotoegypt/',
      previewURL:'/GotoegyptPreview.png'
    }
  ]

  const miniProjectsList = [
    {
      name:'Halloween Catcher',
      about: "Jeu pour halloween",
      codeURL:'https://github.com/Truhcaz/js-50-projects/tree/main/50-halloween-catcher',
      apiURL:'',
      websiteURL:'https://truhcaz.github.io/js-50-projects/50-halloween-catcher',
      previewURL:'/HalloweencatcherPreview.png'
    },
    {
      name:'Cat Generator',
      about: "Une React Web App qui génère des chats à partir de données de l'API JSONPlaceHolder et de l'API Robohash",
      codeURL:'https://github.com/Truhcaz/cat-generator',
      apiURL:'',
      websiteURL:'https://truhcaz.github.io/cat-generator/',
      previewURL:'/CatGeneratorPreview.png'
    },
    {
      name:'Movie App',
      about: "Une application Web qui affiche les films du moments ainsi que leurs notes via l'API MovieDB",
      codeURL:'https://github.com/Truhcaz/js-50-projects/tree/main/17-movie-app',
      apiURL:'',
      websiteURL:'https://truhcaz.github.io/js-50-projects/17-movie-app',
      previewURL:'/MovieAppPreview.png'
    },
    

  ]

  return (
    <React.Fragment>

     <Nav/>
     <About/>
     <Projects id='projects' name='Projets' projects={projectsList}/>
     <Projects id='miniProjects' name='Mini Projets' projects={miniProjectsList}/>
     {/* 
     <Footer/>  */}

    </React.Fragment>
  );
}

export default App;
