import React from 'react';
import Project from "../components/card"
import Navb from "../components/nav/navbar"
import Footer from "../components/footer"
// import resume from ".assets/img"
import "./style.css"


// import './App.css';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";


class Resume extends React.Component {
    render() {
        return (
            <div>
            <Navb />

            <div className="resume">
               <a href="/assets/img/Stacey_Yoon_Resume_10.pdf" download><img className= "resume"src="/assets/img/resume.png"></img>Click Here for download</a>
            </div>
         <Footer />
            </div>
        );
    }
    
}

export default Resume;
