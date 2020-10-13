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
                <h1>Resume</h1>
                <hr></hr>
                <h3>Education</h3>
                <h5>UC Berkeley Extension - AUGUST 2020</h5>
                <h6>Full-Stack Development </h6>
                <br/>
                    <h5>University of California, Irvine - JUNE 2020</h5>
                    <h6>Bachelors of Science, Chemistry</h6>
                <br></br>
                    <h3>Skills</h3>
                    <br/>
                        <ul>
                            <li>Javascript</li>
                            <li>HTML (+CSS)</li>
                            <li>Python</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MySQL</li>
                            </ul>
                            <a href="../images/Stacey_Yoon_Resume.pdf" download><img src="#"></img>Click Here for download</a>
            </div>
         <Footer />
            </div>
        );
    }
    
}

export default Resume;
