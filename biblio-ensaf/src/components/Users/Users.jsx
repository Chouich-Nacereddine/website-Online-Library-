import React, { useState, useEffect } from 'react'
import { Table } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import './Users.css'
import UsersUpload from './UsersUpload';


const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Appeler l'API pour récupérer les utilisateurs
    axios.get("/usersData")
    .then(response => {
      setUsers(response.data);
      console.log(response.data); // Afficher les données récupérées
    })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleEdit = (userId) => {
    // Logique pour éditer l'utilisateur avec l'ID userId
  };

  const handleDelete = (userId) => {
    axios
      .delete(`/api/users/${userId}`)
      .then((response) => {
        setUsers((prevUsers) => {
          return prevUsers.filter((user) => user.id !== userId);
        });
        console.log(`User ${userId} deleted successfully`);
        alert(`${response.data.username} deleted successfully!`);
      })
      .catch((err) => {
        console.error(err);
      });
  };


  return (
    <>
    <UsersUpload/>
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
              <td>{Math.round(user.id)}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.isAdmin ? <b>Admin</b> : 'Not Admin'}</td>
              <td>
                <FaEdit
                  onClick={() => handleEdit(user.id)}
                  className="edit animation"
                />
              </td>
              <td>
                <FaTrash
                  onClick={() => handleDelete(user.id)}
                  className="delete animation"
                />
              </td>
            </tr>

          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Users