import React from 'react'
import About_font from '../../assets/About-font.jpg'
import './About.css'
const About = () => {
  return (
    <div>
        <img src={About_font} alt="" className='about-font'/>
        <div className='description'>
        <p style={{opacity:'100%'}}>
            <b>Welcome to the Library of the National School of Applied Sciences of Fes (<a href="https://ensaf.ac.ma/" target="_blank">ENSA</a> Fes). 
            Our library is a place of knowledge and culture, where students, teachers, 
            and researchers can find academic resources to enrich their work and learning. <br /> <br />
            We believe that the library of ENSA Fes is an essential element of the academic and 
            cultural experience of our community, and we are proud to provide a welcoming environment 
            conducive to learning and discovery. <br /><br />
            Do not hesitate to visit us or <a href="/Contact-us">contact us</a>  for more information about our services and 
            resources. We look forward to helping you achieve your academic and professional goals.</b>
        </p>
        </div>
      
    </div>
  )
}

export default About
