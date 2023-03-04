import React from 'react'
import './Home.css'
import {Button,ButtonGroup} from 'react-bootstrap';

const Home = () => {
  const image= new URL("../../assets/home-font.jpg",import.meta.url)
  return (
      <div>
          <img src={image}  className='image' alt=''/>

            <span className='content'>
            <h5 style={{color:'beige',fontSize:'2rem'}}>Hello!</h5>
            <h1 style={{color:'black',fontSize:'4rem'}}>Welcome To </h1>
            <h5 style={{color:'black',fontSize:'2rem'}}>your Library</h5><br /><br />
            <ButtonGroup  className='flex'>
            <Button variant="dark" href='/Login'>Login</Button> 
                <Button variant="light" href='/Sign-up'>Sign up</Button>
            </ButtonGroup>
        </span> 
      </div>
  )
}

export default Home