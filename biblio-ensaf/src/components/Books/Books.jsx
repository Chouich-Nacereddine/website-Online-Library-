import React from 'react'
import { Card } from 'react-bootstrap'
import SignUp_font from '../../assets/login-font.jpg'
const Books = () => {
  return (
    <div style={{backgroundColor:'black'}}>
            <Card className='container'>
        <Card.Img variant="top" src={SignUp_font} style={{width:'50%',height:'40vh'}} />
        <Card.Body style={{width:'50%',height:'auto'}}>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Books
