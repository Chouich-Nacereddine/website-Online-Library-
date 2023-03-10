import React , {useState} from 'react'
import './Login.css'
import { Form, Row, Col, Button } from 'react-bootstrap';
import { BiLogIn } from 'react-icons/bi'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/users');
            const users = await response.json();
            const user = users.find((user) => user.email === email && user.password === password);

            if (user) {
                alert('Login successful. Thank you for joining us!');
                window.location.href = '/';
              } else {
                setError(true);
              }
        } catch (error) {
            console.error(error);
        }
    };


    const login_font = new URL('../../assets/login-font.jpg', import.meta.url);
    return (

        <div>
            <img src={login_font} className='login-font' alt='' />
            <center>
                <span className='login'>
                    <h2><b><BiLogIn /> Login</b></h2> <br />
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label><b>Email address</b></Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label><b>Password</b></Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                            <Col sm={{ span: 5, offset: 3 }}>
                                <Form.Check label="Remember me" />
                            </Col>
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button type='submit' variant="primary" size="smx" >login</Button>
                        </div>
                        {error && (
                            <div className="text-danger mt-3">
                                Incorrect email or password. Please try again.
                            </div>
                        )}
                    </Form>
                </span>
            </center>


        </div>
    )
}

export default Login