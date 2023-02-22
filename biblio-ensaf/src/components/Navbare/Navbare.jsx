import React from 'react'
import {Nav,Navbar,NavDropdown,Container} from 'react-bootstrap'
import {GiBookshelf} from 'react-icons/gi'
import {IoHome} from 'react-icons/io5'
import {MdFindInPage} from 'react-icons/md'


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
            <NavDropdown title="I'am" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Administrator">Administrator </NavDropdown.Item>
              <NavDropdown.Item href="Instructor">
              Instructor
              </NavDropdown.Item>
              <NavDropdown.Item href="/Student">Student</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Contact-us">
                Contact us
              </NavDropdown.Item>
            </NavDropdown>
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