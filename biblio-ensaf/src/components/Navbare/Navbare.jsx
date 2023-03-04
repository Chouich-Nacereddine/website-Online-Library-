import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap'
import {GiBookshelf} from 'react-icons/gi'
import {IoHome} from 'react-icons/io5'
import {MdFindInPage} from 'react-icons/md'
import {MdMessage} from 'react-icons/md'


const Navbare = () => {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/"><GiBookshelf/> Bibliothèque-Ensaf</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"><IoHome/> Home</Nav.Link>
            <Nav.Link href="/About-us"><MdFindInPage/> About us</Nav.Link>
            <Nav.Link href="/Contact-us"><MdMessage/> Contact us</Nav.Link>
        </Nav>
          <Nav>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link eventKey={2} href="/Sign-up">
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbare