import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import ContactUs from './components/ContactUs/ContactUs'
import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='main'>
        <Header/>
              <Router>
                <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/Contact-us' element={<ContactUs/>} />
                  <Route path='/Login' element={<Login/>} />
                  
                </Routes>
              </Router>

        <Footer/>
    </div>
  )
}

export default App