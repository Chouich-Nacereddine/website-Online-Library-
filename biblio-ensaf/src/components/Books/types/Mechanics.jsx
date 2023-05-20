import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Book1 from '../../../assets/Book1.jpg'
import Book2 from '../../../assets/Book2.jpg'
import Book3 from '../../../assets/Book3.jpg'
import Book4 from '../../../assets/Book4.jpg'
import Book5 from '../../../assets/Book5.jpg'
import Book6 from '../../../assets/Book6.jpg'
import Book7 from '../../../assets/Book7.jpg'
import Book8 from '../../../assets/Book8.jpg'

const Mechanics = () => {
  return (
    <div>
      <div style={{ display: 'flex', paddingLeft: '1rem',paddingTop:'1rem' }}>
        <span style={{ marginRight: '1rem' }}>
          <Card style={{ width: '14.5rem' }}>
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
          <Card style={{ width: '14.5rem' }}>
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
          <Card style={{ width: '14.5rem' }}>
            <Card.Img variant="top" src={Book5} />
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
          <Card style={{ width: '14.5rem' }}>
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

      </div>
      <div style={{ display: 'flex', paddingLeft: '1rem',paddingTop:'1rem' }}>

        <span style={{ marginRight: '1rem' }}>
          <Card style={{ width: '14.5rem' }}>
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

        <span style={{ marginRight: '1rem' }}>
          <Card style={{ width: '14.5rem' }}>
            <Card.Img variant="top" src={Book7} />
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
          <Card style={{ width: '14.5rem' }}>
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
          <Card style={{ width: '14.5rem' }}>
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

export default Mechanics
