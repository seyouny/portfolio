import React from 'react';
import Project from "../components/card"
import Navb from "../components/nav/navbar"
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import "./aboutme.css"


// import './App.css';
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";


class Contact extends React.Component {
    render() {
        return (
            <div>
                <Navb/>
                <header class='masthead'>
                    <p class='masthead-intro'>Hi I'm</p>
                    <h1 class='masthead-heading'>Stacey!</h1>
                </header>
                <section class="introduction-section">
                    <h1>Introduction</h1>
                    <p>I have a Bachelor's of Science in Chemistry from UC Irvine. However, I recently graduated from a coding boot camp in order to make a change in my career path.</p>
                    <p>I advocate for sustainability, empathy, and music.</p>
                </section>
                <section class="location-section">
                    <h1>Where I'm From</h1>
                    <p>I'm from Garden Grove, California. </p>
                </section>
                <section class="questions-section">

                </section>

                
            </div>




        );
    }

}

export default Contact;

