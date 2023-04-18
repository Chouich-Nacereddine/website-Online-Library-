import React from 'react'
import {FaUserGraduate} from 'react-icons/fa';


const Profil = () => {
  
  return (
    <div style={{ backgroundColor: 'beige' }} >
      <div className='d-flex flex-column min-vh-100 align-items-center '  >
        <h1 className='p-5'> <FaUserGraduate/> <b> Profile</b> </h1>
        <div className='w-100 d-flex flex-column  align-items-center p-5  '>
        <center>
          <h2 style={{color:'blue'}}>name</h2>
          <p>Status: </p>
          <p>Email: </p>
          <p>Password: </p>
          
          
          
    </center>
        </div>
        
      </div>
    </div>
  )
}

export default Profil
