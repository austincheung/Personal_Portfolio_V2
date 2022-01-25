import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import MainSection from '../MainPage/index.js';
//import Project from '../Project/Project';
import About from '../About/About';
import {homeObjOne} from '../About/Data';
import Footer from '../Footer/Footer';
import OtherProjects from '../Project/OtherProjects';
import ProjectCarousel from '../Project/Project_Carousel';
    
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle}/>   
         <MainSection />
         <ProjectCarousel />
         {/* <Project /> */}
         <OtherProjects />
         <About {...homeObjOne}/>
         <Footer/>
         
        </>
    )
}

export default Home

