import React, { useState } from "react";
import "./Login.css";
import { Form , Button } from "react-bootstrap";
import { BiLogIn } from "react-icons/bi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin, isAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Envoyer la requête de connexion à l'API
    axios
      .post("/login", { email, password })
      .then((response) => {
        const { username, isAdmin, accessToken, refreshToken } = response.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("isAdmin", isAdmin);

  
        // Rediriger en fonction du statut isAdmin
        if (isAdmin) {
          alert("Login successful! You are login as an Admin");
          navigate("/Admin");
        } else {
          alert("Login successful! Thank you for joining us ");
          navigate("/client");
        }
        onLogin();
      })
      .catch((error) => {
        setError(true);
        alert("Incorrect email or password. Please try again!")
      });
  };

  const login_font = new URL("../../assets/login-font.jpg", import.meta.url);
  return (
    <div>
      <img src={login_font} className="login-font" alt="" />
      <center>
        <span className="login">
          <h2>
            <b>
              <BiLogIn /> Login
            </b>
          </h2>{" "}
          <br />
          <Form onSubmit={handleSubmit} className="d-flex flex-column">
            <Form.Group className="mb-4 d-flex flex-column w-100" controlId="formGroupEmail">
              <Form.Label>
                <b>Email address</b>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 w-100" controlId="formGroupPassword">
              <Form.Label>
                <b>Password</b>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button type="submit" variant="primary" size="smx">
                login
              </Button>
            </div>
            {error && (
              <div className="text-danger mt-3">
                Incorrect email or password. Please try again!
              </div>
            )}
          </Form>
        </span>
      </center>
    </div>
  );
};

export default Login;