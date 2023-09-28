import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import "./Users.css";

const Edit = ({ user , onEdit}) => {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => {
    const updatedUser = {};
    updatedUser.id= user.id
    if (username !== "") {
      updatedUser.username = username;
    }

    if (email !== "") {
      updatedUser.email = email;
    }

    if (password !== "") {
      updatedUser.password = password;
    }

    axios
      .put(`/api/users/${user._id}`, updatedUser)
      .then((response) => {
        console.log(response.data);
        // Gérer la réponse de l'API (message, etc.) selon vos besoins
        
        onEdit(user._id, updatedUser);
        console.log('doneeeeeeeeeeeeeeeeeeeeeeeeeeee')
        handleClose();
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour de l'utilisateur", error);
      });
  };
  return (
    <>
      <FaEdit onClick={() => handleShow()} className="edit animation" />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-primary">
          <Modal.Title style={{ color: "#ededed" }}>Edit test</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <b>Edit Username</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="LastName FirstName"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
              />
              <Form.Label>
                <b>Edit email</b>{" "}
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="name@usmba.ac.ma"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              <Form.Label>
                <b>Edit Password</b>{" "}
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="New password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            className="bg-danger"
          >
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Edit;
