import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';

function Header (){
    return (
        <section>
            <Container fluid className='home-section' id='home'>
                <Row>
                    <Col>
                        <h1>
                            My Name Is  
                            <strong> Sai Aung Min Khant </strong>
                        </h1>
                        <h2>I'm a Web Developer</h2>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Header;