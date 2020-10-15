import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Button from 'react-bootstrap/Button'
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

export default function Navb() {
    return (    
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="/">Stacey</Navbar.Brand>
    <Nav className="mr-auto">
        <Nav.Link href="/projects">Projects</Nav.Link>
        <Nav.Link href="/resume">Resume</Nav.Link>
        <Nav.Link href="/links">About Me</Nav.Link>
    </Nav>
    
</Navbar>)

}