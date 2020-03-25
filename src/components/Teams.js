import React, { Component } from 'react'
import './teams.css';
import axios from 'axios'

class Teams extends Component{
  state =  {
    teams: []
  }
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/photos")
      .then(res => {
        // console.log(res);
        this.setState({
          teams: res.data.splice(1,50)
        })
      })
  } 
   render(){
     const {teams} = this.state;
     const teamsList = teams.length? (
      teams.map(news => {
      return (
      <div className="newsCard" key={teams.id}>
      <div className="card-content">
        <span className="card-title"> {teams.title}</span>
        <a><p>{teams.thumbnailUrl}</p></a>
      </div>
      </div>
     )
    })
      
     ) : (
       <div className="center">
         <h1> No teams yet! </h1>
       </div>
     )
 
 
    return (
      <div className="teams">
        <h1>Team</h1>
        <span id="sp">....</span>
        <p id="message">We believe in entrepreneurial spirit and <br></br>
        bring a full range of experience.</p>

        <div className="teamsContainer">
          <br></br>
        <p><button id="all">All</button></p><br></br>
          <div>{teamsList}</div>
          <div>{teamsList}</div>
          <div>{teamsList}</div>
          <div>{teamsList}</div>
          
          
        </div>


        
      </div>

    

    
  )}
  
}

export default Teams;