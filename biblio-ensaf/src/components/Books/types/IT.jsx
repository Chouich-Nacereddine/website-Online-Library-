import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Book1 from '../../../assets/Book1.jpg'
import Book2 from '../../../assets/Book2.jpg'
import Book3 from '../../../assets/Book3.jpg'
const IT = () => {
  return (
    <div>
      <div style={{ display: 'flex', paddingLeft: '5%' }}>
        <span style={{ marginRight: '1rem' }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Book1} />
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
            <Card.Img variant="top" src={Book3} />
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
            <Card.Img variant="top" src={Book1} />
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

export default IT
