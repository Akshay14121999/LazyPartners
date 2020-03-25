import React from 'react'
import discuss from './images/discuss.jfif'
import ashish from './images/ashish.jfif'

const About = () =>{
  return (
    <div className="about">

      <h1>About</h1>
      <span id="sp">...</span>
      <p id="message">Supporting visionary entrepreneurs<br></br>across diverse sectors.</p>

      <div className="seed">
        <div>
          <img src={discuss}></img>
        </div>
        <div>
          <p id="if">INDIA FOCUSED</p>
          <p id="message1">From Seed <br></br> to Growth<br></br> Capital</p>
        </div>
      </div>

      <p id="message">Sectors we invest in:</p>

      <section id="sector1"> <a href="/portfolio">Consumer</a><a href="/portfolio">Education</a><a href="/portfolio">Finance</a><a href="/portfolio">Healthcare</a><a href="/portfolio">Industrials</a><a href="/portfolio">Internet</a><a href="/portfolio">IT Services</a><a href="/portfolio">Logistics</a><a href="/portfolio">Mobile</a><a href="/portfolio">Saas</a></section>

      <div className="Review">
        <div><img src={ashish} ></img></div>
        <div>
          <p id="reviews">"LAZY is an organization thinks like us.<br></br>
          The team is very grounded and<br></br> humble; they have a large vision <br></br>about where they want
          their<br></br> companies to go"</p>

          <big>ASHISH HEMRAJANI</big><br></br>
          <small>Founder and CEO,BookMyShow</small>
        </div>
      </div>

   
    </div> 
  )
}

export default About;