import React from 'react';
import Project from "../components/card"
import Navb from "../components/nav/navbar"
import Footer from "../components/footer"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import "./style.css"
import Kanban from "../components/kanban"
import Welcome from 'react-welcome-page'


// import './App.css';
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";


class Main extends React.Component {
    render() {
        return (
            <div id='my-container'>

                <Welcome
                    loopDuration={2000}
                    data={
                        [
                            {
                                "backgroundColor": "rgb(144,190,109)",
                                "textColor": "#fcd5ce",
                                "text": "Sustainability",
                                "image": "/assets/img/tree.png"
                            },
                            {
                                "backgroundColor": "rgb(230, 204, 251)",
                                "textColor": "#4a4e69",
                                "text": "Aspiring Software Engineer",
                                "image": "/assets/img/cs.png"
                            }
                        ]
                    }
                />
            <div className = 'page'>
                {/* <img clasName = 'train' src='/assets/img/train'></img> */}
                <div className="nav"><Navb /></div>
               
                <div className="board">
                    <h4>Hello My Name is Stacey.
                    Check out what I'm currently working on here.</h4>
                    <Kanban />
                <img src='/assets/img/profile.png'></img>
                    </div>
            </div>
        </div>

        );
    }

}

export default Main;
