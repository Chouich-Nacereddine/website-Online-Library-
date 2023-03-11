import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Book9 from '../../../assets/Book9.jpg'
import Book10 from '../../../assets/Book10.jpg'
import Book11 from '../../../assets/Book11.jpg'
import Book12 from '../../../assets/Book12.jpg'
import Book13 from '../../../assets/Book13.jpg'
import Book14 from '../../../assets/Book14.jpg'
import Book15 from '../../../assets/Book15.jpg'
import Book16 from '../../../assets/Book16.jpg'

const Management = () => {
  return (
    <div>
      <div style={{ display: 'flex', paddingLeft: '5%' }}>
        <span style={{ marginRight: '1rem' }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Book10} />
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
            <Card.Img variant="top" src={Book9} />
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
            <Card.Img variant="top" src={Book12} />
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
            <Card.Img variant="top" src={Book11} />
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
      <div style={{ display: 'flex', paddingLeft: '5%' }}>

        <span style={{ marginRight: '1rem' }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Book14} />
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
            <Card.Img variant="top" src={Book13} />
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
            <Card.Img variant="top" src={Book16} />
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
            <Card.Img variant="top" src={Book15} />
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

export default Management
