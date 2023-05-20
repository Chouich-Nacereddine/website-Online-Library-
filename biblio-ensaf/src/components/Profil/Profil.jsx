import React from 'react'


const Profil = () => {
  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email');
  const isAdmin = localStorage.getItem('isAdmin');

  console.log(isAdmin);



  return (
    <div style={{ backgroundColor: 'beige' }} className='w-100 vh-100 d-flex flex-column justify-content-center  align-items-center'>

      <div className='w-cover d-flex flex-column  align-items-center p-5  '
        style={{ backgroundColor:'bisque', borderRadius: '2rem', fontFamily: 'Microsoft YaHei' ,color:'black', border:'1px solid gray'}}
      >
        
          <h2 className='text-dark' style={{fontSize:'3rem'}}>{username}</h2> <br />
          <p> <b className='text-primary'> Status: </b>  {isAdmin === '1' ? 'Admin' : 'Client'} </p>
          <p> <b className='text-primary'>Email: </b> {email} </p>
          <p> <b className='text-primary'>Password:</b> *****************</p>


  

      </div>
    </div>
  )
}

export default Profil
