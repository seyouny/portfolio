import React from 'react';
import Project from "../components/card"
import Navb from "../components/nav/navbar"
import Row from 'react-bootstrap/Row'
import Footer from "../components/footer"


// import './App.css';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";


class Projects extends React.Component {
    projects = [
        {
            title: "COD: Stats Dashboard",
            image: "./assets/img/brag.png",
            description: "Emphasizing the competitive nature of multiplayer video games, this dashboard allows Call of Duty users to connect and compare their stats with their friends. Bragging Rights is a unique React-powered platform that offers gaming enthusiasts an arena to coordinate multi-game tournaments among a circle of friends, with aggregated reporting on performance statistics in a dynamically updated dashboard. Version 1 of Bragging Rights centers on the popular Call of Duty universe. Future plans to incorporate other gaming universes include League of Legends and NBA 2K.",
            link: "https://limitless-ocean-05272.herokuapp.com/",
            github: "https://github.com/seyouny/statsdash"
        },
        {
            title: "Work&Balance",
            image: "./assets/img/workbalance.png",
            description: " Work&Balance was a collaborative project that featured the use of GitHub Jobs API and Google Places API. The purpose of this website is to provide a job search engine that also provides a glimpse of what your everyday workday breaks might look like. Recruiters and networkers alike may use this website to identify appropriate places to have meetings.",
            link: "https://seyouny.github.io/JobSearchEateries/",
            github: "https://github.com/seyouny/JobSearchEateries"
        },
        {
            title: "Book Search",
            image: "./assets/img/book.gif",
            description: "Using React, NodeJS, and Google Book Search API, this is a webpage that searches for and populates specific books. Users are given the option of saving each book. ",
            link: "https://dry-coast-13098.herokuapp.com/",
            github: "https://github.com/seyouny/booksearch"
        },
        {
            title: "Middle Ground",
            image: "./assets/img/middle.png",
            description: " Middle|Ground aims to shine a light on the imbalanced and sometimes inaccurate news we receive through social media which inform our opinions, to promote greater perspective and dialogue about issues of social importance.",
            link: "https://rocky-meadow-78317.herokuapp.com/",
            github:"https://github.com/seyouny/Middleground"
        },
        {
            title: "Clarity",
            image: "./assets/img/clarity.png",
            description: "Our application aims to provide users with an outlet to get out any of their pent up anxiety, sadness, frustration, or other various mental states. Furthermore, we wanted to spread awareness of a couple of common mental health disorders that we had researched.While building this application our team learned to use Material UI (a CSS Framework) as an npm package in React applications, deploying on Heroku under a reserved domain, and how to use speech recognition via the web speech API.",
            link: "https://tranquil-reef-00624.herokuapp.com/",
            github: "https://github.com/seyouny/Clarity"
        },
        {
            title: "Password Generator",
            image: "./assets/img/password.png",
            description: "Randomly generates a password based on user criteria. Display onto screen after selections are made.",
            link: "https://seyouny.github.io/Password_generator/",
            github: "https://github.com/seyouny/password_generator"
        }
    ]
    render(){
        return (
            <div>
                <Navb/>
                <Row>
                {this.projects.map((proj)=>{
                    return <Project
                    title = {proj.title}
                    image = {proj.image}
                    description = {proj.description}
                    link = {proj.link}
                    github = {proj.github}
                    />
                })}
                </Row>
                {/* <Footer/> */}
            </div>
            
        );
    }
    
}

export default Projects;
