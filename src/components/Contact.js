import React from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <Form className="contact-form">
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3">
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '150px' }}
        />
      </FloatingLabel>
      </Form.Group>
      <div className="button">
      <Button variant="dark">Send</Button>{' '}
      </div>
    </Form>
  );
}

export default Contact;