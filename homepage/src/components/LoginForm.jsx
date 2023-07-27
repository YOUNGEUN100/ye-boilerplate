import React from 'react'
import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function LoginForm() {
  return (
    <Container className="panel">
      <h1 className='mb-3'>로그인</h1>
        <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Col sm>
                    <Form.Control type="email" placeholder="Email address" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Col sm>
                    <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>
            <br/>

            <div className="d-grid gap-1">
                <Button variant="secondary" type="submit" >
                    Sign In
                </Button>
            </div>
        </Form>
    </Container>
  )
}

export default LoginForm