import React from 'react'
import location1 from './images/location.jfif'

const ReachUs = () =>{
  return (
    <div className="reachUs">
     
      <h1>Reach Us</h1>
      <span id="sp">...</span>
      <p id="message">Have a question or proposal in mind?<br></br>Get in touch with us.</p>



    <div className="Reach">
      <div>
        <h2>Send us a message</h2>
        <label>Select Sector</label><br></br>
        <input type="text" ></input><br></br>
        <label>Name</label><br></br>
        <input type="text"></input><br></br>
        <label>Email</label><br></br>
        <input type="text"></input><br></br>
        <label>Organization</label><br></br>
        <input type="text"></input><br></br>
        <label>What's in your mind</label><br></br>
        <input type="message" ></input><br></br>
        <label>URL</label><br></br>
        <input type="text" ></input><br></br>

        <button id="myButton1">UPLOAD FILE</button>
        <small>No file chosen</small>
        <br></br>
        <button id="myButton">SEND</button>
      </div>
      <div>
        <h2>Find Us</h2>

        <span>Address:</span>
        <p>Unit 1209, 13th Floor, One Oberoi Tower, Opposite Oberoi Mall<br></br>
        Near Arrey Colony , Goregaon(East) , Mumbai</p>

        
        <span id="email">Email:</span> <span id="phone">Phone:</span> <br></br>
        <label id="emaila">xyz@lazypartners.com </label> <label>+91 9999999999</label>
        <br></br><br></br>
        <a href="https://www.google.com/maps/place/Oberoi+mall+Goregaon+East/@19.17383,72.8570213,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7b7a9bf5df81f:0xdb4f06e62ff37a29!8m2!3d19.17383!4d72.85921"><img src={location1} id="image"></img></a>
        <br></br><br></br>
        <span>Address:</span>
        <p>LAZY PARTNERS, Leela Galleria , second floor, No 342, 6th feet<br></br> Airport Road, Bangaluru 560088</p>

        
        <span id="email">Email:</span> <span id="phone">Phone:</span> <br></br>
        <label id="emaila">xyz@lazypartners.com </label> <label>+91 8888888888</label>
        <br></br><br></br>
        <a href="https://www.google.com/maps/place/The+Leela+Palace+Bengaluru,+A+Contemporary+Luxury+Hotel/@12.96065,77.6461665,17z/data=!3m2!4b1!5s0x3bae14067037fb71:0x8e39042eea460ad8!4m8!3m7!1s0x3bae14067cca9bdd:0x111bbe37cc24e71a!5m2!4m1!1i2!8m2!3d12.96065!4d77.6483552"><img src={location1}  id="image"></img></a>


          

      </div>
    </div>
    
    </div> 
  )
}

export default ReachUs;