import React from "react";
import {Col,Row } from "react-bootstrap";
import {DiJavascript1,DiNodejs,DiReact,DiGit,DiPostgresql} from "react-icons/di";

function Skills(){
    return(
            <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
                <Col xs={4} md={2} className='icons'>
                    <p><DiJavascript1 /><br/>Javascript</p>
                </Col>
                <Col xs={4} md={2} className='icons'>
                    <p><DiNodejs /><br/>Node.js</p>
                </Col>
                <Col xs={4} md={2} className='icons'>
                    <p><DiReact /><br/>React</p>
                </Col>
                <Col xs={4} md={2} className='icons'>
                    <p><DiGit /><br/>Git</p>
                </Col>
                <Col xs={4} md={2} className='icons'>
                    <p><DiPostgresql /><br/>PostgreSQL</p>
                </Col>
            </Row>
    )
}

export default Skills;