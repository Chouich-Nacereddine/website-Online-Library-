import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Book2 from '../../../assets/Book9.jpg'
import Book4 from '../../../assets/Book10.jpg'
import Book6 from '../../../assets/Book11.jpg'
import Book8 from '../../../assets/Book12.jpg'
const Robotics = () => {
  return (
    <div>
      <div style={{ display: 'flex', paddingLeft: '5%' }}>
        <span style={{ marginRight: '1rem' }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Book2} />
            <Card.Body >
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </span>

        <span style={{ marginRight: '1rem' }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Book4} />
            <Card.Body >
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </span>
        <span style={{ marginRight: '1rem' }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Book6} />
            <Card.Body >
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </span>
        <span style={{ marginRight: '1rem' }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Book8} />
            <Card.Body >
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </span>
      </div>
    </div>
  )
}

export default Robotics
