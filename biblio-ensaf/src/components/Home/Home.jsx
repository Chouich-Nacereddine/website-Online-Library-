import React from 'react'
import './Home.css'
import {Button} from 'react-bootstrap';

const Home = () => {
  const image= new URL("../../assets/home-font.jpg",import.meta.url)
  return (
      <div>
          <img src={image}  className='image'/>
            <span className='button'>
              <><Button variant="dark" href='/Login'>Login</Button>
                <Button variant="light" href='/Sign-up'>Sign up</Button></>
            </span>
      </div>
  )
}

export default Home