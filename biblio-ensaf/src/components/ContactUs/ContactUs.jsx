import React from 'react'
import {Form,Button} from 'react-bootstrap';
import {MdMessage} from 'react-icons/md'

import './ConatctUs.css'
const ContactUs = () => {    
    const contact_font = new URL('../../assets/contact-font.jpg',import.meta.url);

  return (
    <div>
        <img src={contact_font} className='contact-font' alt='' />
        <center>
        <span className='contact'>
            <h2><b><MdMessage/> Contact us</b></h2> <br />
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label><b>Email address</b></Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label><b>Message</b></Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            </Form>  
            <Button variant="primary">Send</Button>
        </span>
      
        </center>
     
    </div>
  )
}

export default ContactUs