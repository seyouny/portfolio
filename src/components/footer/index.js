import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "./style.css"

export default function Footer(props) {
    return <footer>
        <Row>
            <Col xs={6} md={4}>
                Links:
                <div>
                    <a href="https://github.com/seyouny/">GitHub</a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/seyouny/">LinkedIn</a>
                </div>

            </Col>
            <Col xs={6} md={4}>
            </Col>
            <Col xs={6} md={4}>
                Email: 
                <div>
                    <a href="stacey.exp@gmail.com">stacey.exp@gmail.com</a>
                </div>
            </Col>
        </Row>
    </footer>
}