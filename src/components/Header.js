import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';

function Header (){
    return (
        <section>
            <Container fluid className='home-section' id='home'>
                <Row>
                    <Col>
                        <h1>Hi!<br/>
                            I'm  
                            <strong> Sai AungMinKhant </strong>
                        </h1>
                        <h2>A Web Developer</h2>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Header;