import React, {useState,useEffect} from 'react'
import { Table } from "react-bootstrap";
import axios from "axios";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("/api/users").then((response) => {
          setUsers(response.data);
        });
      }, []);
      

  return (
    <>
<Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th> 
          <th>Remove</th> 

        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.isAdmin}</td>
          </tr>
          
        ))}
      </tbody>
    </Table>
    </>
  )
}

export default Users
