import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Projects from './components/Projects/Projects';


function App() {
  
  const projectsList = [
    {
      name:'Magic Eye',
      about: "Une React Web App pour détecter les visages sur une image grâce à ClarifaiAPI, avec l'utilisation d'une base de donnée PostgresSQL.",
      technologies:['React','Express'],
      codeURL:'https://github.com/Truhcaz/magic-eye',
      apiURL:'https://github.com/Truhcaz/magic-eye-api',
      websiteURL:'https://magic-eye.onrender.com/',
      previewURL:'/MagicEyePreview.png'
    },
    {
      name:'Movie App',
      about: "Une application Web qui affiche les films du moments ainsi que leurs notes via l'API MovieDB",
      codeURL:'https://github.com/Truhcaz/cat-generator',
      apiURL:'',
      websiteURL:'https://truhcaz.github.io/cat-generator/',
      previewURL:'/MovieAppPreview.png'
    },
    {
      name:'Cat Generator',
      about: "Une React Web App qui génère des chats à partir de données de l'API JSONPlaceHolder et de l'API Robohash",
      codeURL:'https://github.com/Truhcaz/cat-generator',
      apiURL:'',
      websiteURL:'https://truhcaz.github.io/cat-generator/',
      previewURL:'/CatGeneratorPreview.png'
    }
  ]

  const miniProjectsList = [
    {
      name:'Theme Clock',
      about: "Une horloge en temps réel avec une option de light/dark mode",
      technologies:['HTML','CSS','JS'],
      codeURL:'https://github.com/Truhcaz/js-50-projects/tree/main/19-theme-clock',
      apiURL:'',
      websiteURL:'https://truhcaz.github.io/js-50-projects/19-theme-clock',
      previewURL:'/ThemeClockPreview.png'
    },
    {
      name:'Dad Jokes',
      about: "Des dad jokes générés aléatoirement avec l'API icanhazdadjoke",
      technologies:['HTML','CSS','JS'],
      codeURL:'https://github.com/Truhcaz/js-50-projects/tree/main/10-dad-jokes/',
      apiURL:'',
      websiteURL:'https://truhcaz.github.io/js-50-projects/10-dad-jokes',
      previewURL:'/DadJokesPreview.png'
    },
    {
      name:'Drink Water',
      about: "Une application Web pour connaître le nombre de verre d'eau qu'il nous reste à boire dans la journée",
      technologies:['HTML','CSS','JS'],
      codeURL:'https://github.com/Truhcaz/js-50-projects/tree/main/16-drink-water/',
      apiURL:'',
      websiteURL:'https://truhcaz.github.io/js-50-projects/16-drink-water',
      previewURL:'/DrinkWaterPreview.png'
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
