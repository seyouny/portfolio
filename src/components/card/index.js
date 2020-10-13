import React from "react";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";


export default function Project(props) {
    return <Col xs={6} md={4}>
    <Card className="mx-auto mt-3" style={{ width: '30rem'}}>
    <Card.Img variant="top" src={props.image} style={{ height: '15rem'}} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.description}
      </Card.Text>
      <Card.Link href={props.link}>{props.title}</Card.Link>
      <Card.Link href={props.github}>Github Link</Card.Link>
    </Card.Body>
  </Card>
  </Col>
}