import React from 'react'
import './SignUp.css'
import { Form, Row, Col, Button } from 'react-bootstrap';
import { GoSignIn } from 'react-icons/go'
import SignUp_font from '../../assets/login-font.jpg'

const SignUp = () => {

 

  return (
    <div>
      <img src={SignUp_font} className='signUp-font' alt='' />
      <center>
        <span className='signUp'>
          <h2><b><GoSignIn /> Sign up</b></h2> <br />

          <Form >
            <Row>
              <Col>
                <Form.Control placeholder="First name" />
              </Col>
              <Col>
                <Form.Control placeholder="Last name" />
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label><b>Email address</b></Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label><b>Password</b></Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
              <Col sm={{ span: 5, offset: 3 }}>
                <Form.Check label="Remember me" />
              </Col>
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" size="smx" type='submit'>Sign up</Button>
              <a href="http:/Login"> <br /><b>I already have an account</b></a>

            </div>
          </Form>
        </span>
      </center>

    </div>
  )
}

export default SignUp
