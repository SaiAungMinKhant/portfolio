import React from "react";
import {Container, Col,Row } from "react-bootstrap";
import {DiJavascript1,DiNodejs,DiReact,DiGit,DiPostgresql} from "react-icons/di";

function Skills(){
    return(
        <Container>
            <Row>
                <h2>Technologies I Use</h2>
                <Col>
                    <p><DiJavascript1 />  Javascript</p>
                </Col>
                <Col>
                    <p><DiNodejs />  Node.js</p>
                </Col>
                <Col>
                    <p><DiReact /> React</p>
                </Col>
                <Col>
                    <p><DiGit />Git</p>
                </Col>
                <Col>
                    <p><DiPostgresql />  PostgreSQL</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Skills;