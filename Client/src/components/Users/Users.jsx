import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import {FaTrash } from "react-icons/fa";
import axios from "axios";
import "./Users.css";
import UsersUpload from "./UsersUpload";
import Edit from "./Edit";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // Appeler l'API pour récupérer les utilisateurs
    axios
      .get("/usersData")
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleEdit = (id, updatedUser) => {
    const updatedUsers = users.map((user) =>
      user._id === id ? updatedUser : user
    );
    setUsers(updatedUsers);
  };

  const handleDelete = (user) => {
    const userId = user._id;
    console.log(userId);
    axios
      .delete(`/api/users/${userId}`)
      .then((response) => {
        if (response.status === 204) {
          // Utilisateur supprimé avec succès
          console.log(`User ${userId} deleted successfully`);
          //alert(`${user.username} deleted successfully!`);
          const updatedUsers = users.filter((user) => user._id !== userId);
          setUsers(updatedUsers);
        } else {
          console.log("Échec de la suppression de l'utilisateur.");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression de l'utilisateur:", error);
      });
  };

  return (
    <>
      <UsersUpload />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.isAdmin ? <b>Admin</b> : "Not Admin"}</td>
              <td>
                <Edit user={user} onEdit={handleEdit} />
              </td>
              <td>
                <FaTrash
                  onClick={() => handleDelete(user)}
                  className="delete animation"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Users;