import React from "react";
import {Container,Col,Row} from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import mac from "./images/mac.png";

function Projects(){
    return(
        <Container fluid className="project">
            <div className="project-intro">
            <h2 style={{paddingBottom:"10px"}}>My Recent Works</h2>
            <h3>Here are a few projects I've worked on recently.</h3>
            </div>
            <Row style={{justifyContent:"center",paddingBottom:"10px"}}>   
                <Col md="4" className="project-card" >
                    <ProjectCards
                        imgPath={mac}
                        title="Project1"
                        description="Testing 1 2 3..."
                        
                    />
                </Col>
                <Col md="4" className="project-card" >
                    <ProjectCards
                        imgPath={mac}
                        title="Project1"
                        description="Testing 1 2 3..."
                        
                    />
                </Col>
                <Col md="4" className="project-card" >
                    <ProjectCards
                        imgPath={mac}
                        title="Project1"
                        description="Testing 1 2 3..."
                        
                    />
                </Col>      
            </Row>
        </Container>
    )
}

export default Projects;