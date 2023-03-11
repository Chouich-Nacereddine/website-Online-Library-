import React from 'react'
import {Table } from 'react-bootstrap'
import {MdAlternateEmail} from 'react-icons/md'
import {FcCalendar} from 'react-icons/fc'
import {BsBookHalf} from 'react-icons/bs'
const IT = () => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Book Title <BsBookHalf/></th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email <MdAlternateEmail/></th>
          <th>Pick-up date <FcCalendar/></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Book 1</td>
          <td>Nacer</td>
          <td>Chouich</td>
          <td>Chouich@usmba.ac.ma</td>
          <td>07/03/2023</td>
          
        </tr>
        <tr>
          <td>2</td>
          <td>Book 2</td>
          <td>Imane</td>
          <td>Arioua</td>
          <td>Arioua@usmba.ac.ma</td>
          <td>4/03/2023</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default IT
