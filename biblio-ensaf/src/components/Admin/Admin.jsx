import React from 'react'
import { Tab, Row, Col, Nav } from 'react-bootstrap'
import { CgProfile } from 'react-icons/cg'
import Profil from '../Profil/Profil'
import Users from '../Users/Users'

const Admin = () => {
  return (
    <div className='w-100 min-vh-100' style={{ backgroundColor: 'beige' }}>
      <Tab.Container id="left-tabs-example" defaultActiveKey="My Profil">
        <Row className='px-0'>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column text-center bg-dark min-vh-100 h-100  border  border-2 border-secondary " style={{ borderTopRightRadius: '30px' }}>
              <Nav.Item>
                <Nav.Link eventKey="My Profil" className='text-muted ' style={{ borderTopRightRadius: '24px', borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }}> <h5><CgProfile /> My Profil</h5></Nav.Link>
              </Nav.Item> <br /> 
              <Nav.Item>
                <Nav.Link eventKey="Users">Users</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Books">Books</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content className='mx-0'>
              <Tab.Pane eventKey="My Profil">
                <Profil />
              </Tab.Pane>
              <Tab.Pane eventKey="Users">
                <Users/>
              </Tab.Pane>
              <Tab.Pane eventKey="Books">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo commodi eius ea. Nesciunt maiores, sed a delectus consequuntur earum illum alias assumenda modi non amet id quaerat, impedit quia vitae?
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

    </div>
  )
}

export default Admin
