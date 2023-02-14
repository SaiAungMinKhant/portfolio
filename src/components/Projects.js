import React from "react";
import {Container,Col,Row} from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import image1 from "./images/image1.jpg";

function Projects(){
    return(
        <Container fluid="md">
            <Row style={{justifyContent:"center",paddingBottom:"10px"}}>   
                <Col md="4" className="project-card" >
                    <ProjectCards
                        imgPath={image1}
                        title="Project1"
                        description="Testing 1 2 3..."
                        
                    />
                </Col>
                <Col md="4" className="project-card" >
                    <ProjectCards
                        imgPath={image1}
                        title="Project1"
                        description="Testing 1 2 3..."
                        
                    />
                </Col>
                <Col md="4" className="project-card" >
                    <ProjectCards
                        imgPath={image1}
                        title="Project1"
                        description="Testing 1 2 3..."
                        
                    />
                </Col>
                <Col md="4" className="project-card" >
                    <ProjectCards
                        imgPath={image1}
                        title="Project1"
                        description="Testing 1 2 3..."
                        
                    />
                </Col>
                <Col md="4" className="project-card" >
                    <ProjectCards
                        imgPath={image1}
                        title="Project1"
                        description="Testing 1 2 3..."
                        
                    />
                </Col>
                <Col md="4" className="project-card" >
                    <ProjectCards
                        imgPath={image1}
                        title="Project1"
                        description="Testing 1 2 3..."
                        
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Projects;