import React, { useState} from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import LinkIcon from '@material-ui/icons/Link';
import IconButton from '@material-ui/core/IconButton';
import Dots from 'react-carousel-dots';

import "./Project.css"


const Project_Carousel = () => {

const [project, setProject] = React.useState([
    
    {

        name: 'Portfolio V2',
        imgUrl: 'https://i.imgur.com/Z40gTs3.png',
        date:'Date: Aug 2021',
        descpiption: 'Second Iteration of my portfolio created using MERN Stack. The purpose of this website was to grasp a basic understanding of the MERN Stack.',
        link:'https://github.com/austincheung/Personal_Portfolio_V2',
    },
    {

        name: 'PHP and AngularJs Website',
        imgUrl: 'https://i.imgur.com/eh5uA9z.png',
        date:'Date: March 2021',
        descpiption: 'Co-lead the creation of a website using AngularJs, PHP and SQL. The purpose of this website was to create a front-end and back-end website for a flower shop. The website features working signin and purchase pages that would load all the clients data to an sql web server.',
        link:'https://github.com/austincheung/PHP-and-AngularJS',
    },
    {

        name: 'Discord Bot',
        imgUrl: 'https://i.imgur.com/bIZrNQe.png',
        date:'Date: May 2020',
        descpiption: 'Created a Bot for discord using NodeJs that would allow people to queue up music from spotify or youtube in their voice channels. Users were able to play pause and skip songs in the queue as well as automatically assign roles to people based on their reactions to messages.',
        link:'https://github.com/austincheung/Discord-Bot',
    },
    {

        name: 'Portfolio V1',
        imgUrl: 'https://i.imgur.com/6yBEvmk.png',
        date:'Date: December 2019',
        descpiption: 'First Iteration of my portfolio created with Html and CSS. This website served to demonstrate my understanding in Html and CSS. By using the stylesheet provided by w3 schools, I was able to make a dynamic website that supports both mobile and desktop.',
        link:'https://github.com/austincheung/HTML-and-CSS-Website',
    },
    
    ]);

    const [current , setcurrent] = React.useState(0);
    const length = project.length;
    const next = () =>{
        setcurrent(current === length -1 ? 0 : current +1)
    }

    const prev = () =>{
        setcurrent(current === 0 ? length-1 : current -1)
    }

      return (
        <section>
             <div className = 'infoContainer' id = 'projects'>
                 <div className = 'infoWrapper'> 
                     <div className = 'textWrapper'>
                      <h1 className = 'topLine'>Projects</h1>
                     </div>

                     <div className = 'cardContainer'>
            {project.map((project, index) => {
              return (
                  <div className ={index === current ? 'slide active' : 'slide'} key = {index}>
                      
                      {index === current && (
                        <div style = {{ backgroundImage: `url(${project.imgUrl}` }} className="card">
                        <FaArrowAltCircleLeft className="left-arrow"  onClick={prev}/>
                        <FaArrowAltCircleRight className="right-arrow" onClick={next} />
                        

                        <h3> {project.name} </h3>
                        <p style={{left:700}}>{project.date}</p>
                        <p style={{left:700, top:25}}>{project.descpiption} </p>
                        <a href={project.link} target="_blank" rel="noreferrer">
                         <IconButton>
                        <LinkIcon style={{ fontSize:50, left:10, top:10 , color:"#ffff"}}/>
                        </IconButton>
                         </a>

                         <div className = 'dots'>
                        <Dots  length={4} active={current} />
                        </div>
                        </div>
                      )}
                  
                  </div>
              )
          })}
          </div>
          
                     </div>
                     
                     </div>
                     
          </section>
      )
      
    };
    
    export default Project_Carousel;
    