import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';

function Header (){
    return (
        <section>
            <Container fluid className='home-section' id='home'>
                <Row>
                    <Col md={7}>
                        <h1>
                            Hi there!
                        </h1>
                        <h1>
                            My Name Is  
                            <strong> Sai Aung Min Khant</strong>
                        </h1>
                        <h1>I'm a Full Stack Web Developer</h1>
                    </Col>
                    <Col md={5}>

                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Header;