import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCards(props) {
  return (
        <Card className="project-card-view"  style={{background:"transparent"}} >
        <Card.Img variant="top" src={props.imgPath} alt='card-img' />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text style={{textAlign:"justify"}}>
              {props.description}
            </Card.Text>
            <Button className="project-buttons" href={props.ghLink} target="blank" >Demo</Button>
        </Card.Body>
        </Card>
  );
}

export default ProjectCards;