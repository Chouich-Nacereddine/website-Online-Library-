import React, { useState } from 'react'
import './SignUp.css'
import { Form, Row, Col, Button } from 'react-bootstrap';
import { GoSignIn } from 'react-icons/go'
import SignUp_font from '../../assets/login-font.jpg'

import axios from 'axios'

const SignUp = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Création de l'objet de données à envoyer
    const userData = {
      firstName,
      lastName,
      email,
      password
    };
    console.log(userData)
    // Appel de l'API POST avec Axios
    axios.post('/signup', userData)
      .then(response => {
        console.log(response.data); // Affichage de la réponse du serveur
        window.location.href = '/Login';
      })
      .catch(error => {
        console.error(error); // Affichage de l'erreur en cas d'échec
        alert(error);
      });
  };

  return (
    <div>
      <img src={SignUp_font} className='signUp-font' alt='' />
      <center>
        <span className='signUp'>
          <h2><b><GoSignIn /> Sign up</b></h2> <br />

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Control placeholder="First name" value={firstName} onChange={e => setFirstName(e.target.value)} />
              </Col>
              <Col>
                <Form.Control placeholder="Last name" value={lastName} onChange={e => setLastName(e.target.value)} />
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label><b>Email address</b></Form.Label>
              <Form.Control type="email" placeholder="Enter email"  value={email} onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label><b>Password</b></Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
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