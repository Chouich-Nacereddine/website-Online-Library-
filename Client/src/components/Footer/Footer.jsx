import React from 'react'
import './Footer.css'
import {Card,Button} from 'react-bootstrap';
import {IoLibraryOutline} from 'react-icons/io5'

const Footer = () => {
  return (
    <div className='footer'>

       <Card className="text-center bg-dark text-white " border="light" >
      <Card.Header style={{ fontSize: '1.2rem' }}> <IoLibraryOutline/><b> Bibliothèque-Ensaf</b></Card.Header>
      <Card.Body >
        <Card.Title>Short description</Card.Title>
        <Card.Text className="text-muted">
        Our library at ENSA Fès: a space for learning and sharing for students, teachers, and researchers..
        </Card.Text>
        <Button variant="primary" href='/Contact-us'>Contact us</Button>
      </Card.Body>
      <Card.Footer className="text-muted">&copy; {new Date().getFullYear()} Bibliothèque-Ensaf.ALL Rights Reserved  -designed by ARIOUA-Imane & CHOUICH-Nacerddine </Card.Footer>
    </Card>

    </div>
  )
}

export default Footer