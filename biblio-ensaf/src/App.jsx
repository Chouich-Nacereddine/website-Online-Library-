import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import ContactUs from './components/ContactUs/ContactUs'
import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import About from './components/About/About'
import SignUp from './components/SignUp/SignUp'
import Books from './components/Books/Books'
import Admin from './components/Admin/Admin'
import Profil from './components/Profil/Profil'

const App = () => {


  
  return (
    <div className='main'>
        <Header/>
        
              <Router>
                <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/Contact-us' element={<ContactUs/>} />
                  <Route path='/Login' element={<Login/>} />
                  <Route path='/About-us' element={<About/>} />
                  <Route path='/Sign-up' element={<SignUp/>} />
                  <Route path='/Books' element={<Books/>} />
                  <Route path='/Admin' element={<Admin/>} />
                  <Route path='/Profil' element={<Profil/>} />
                </Routes>
              </Router>

        <Footer/>
    </div>
  )
}

export default App