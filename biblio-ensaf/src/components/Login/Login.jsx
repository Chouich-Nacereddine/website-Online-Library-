import React from 'react'
import './Login.css'
import { Form,Row,Col,Button} from 'react-bootstrap';
import {BiLogIn} from 'react-icons/bi'

const Login = () => {
    const login_font = new URL('../../assets/login-font.jpg',import.meta.url);
  return (
    
    <div>
        <img src={login_font} className='login-font' />            
    <center>
        <span className='login'>
        <h2><b><BiLogIn/> Login</b></h2> <br />
            <Form>
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
            <Button variant="primary" size="smx" href='/login'>login</Button>
            </div>
            </Form>
        </span>
    </center>
            

    </div>
  )
}

export default Login