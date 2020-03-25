import React from 'react'
import './navbar.css'

const navbar = () =>{
  return (
  
    <div className="container">
    <div className="logo"><a href="/">Lazy Partners</a></div>
     <div className="links">
       <ul>
        <li><a href="/portfolio">Portfolio</a></li>
        
        <li><a href="/teams">Teams</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/news">News</a></li>
        <li><a href="/reach-us">Reach US</a></li>
       </ul>
     </div>

    </div> 
    
  )
}



export default navbar;