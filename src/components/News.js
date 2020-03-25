import React , {Component}from 'react'
import axios from 'axios'

class news extends Component{
  state =  {
    news: []
  }
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        // console.log(res);
        this.setState({
          news: res.data.splice(1,50)
        })
      })
  } 
   render(){
     const {news} = this.state;
     const newsList = news.length? (
      news.map(news => {
      return (
      <div className="newsCard" key={news.id}>
      <div className="card-content">
        <span className="card-title"> {news.title}</span>
        <a><p>{news.body}</p></a>
      </div>
      </div>
     )
    })
      
     ) : (
       <div className="center">
         <h1> No news yet! </h1>
       </div>
     )
    return (
      <div id="news">
        <h1>News</h1>
        <span id="sp">...</span>
        <p id="message">Get the latest updates and insights<br></br>about our company.</p>  
        <h2 id="ph3">Press</h2>
      
        <div id="newsContainer">
        
        <div id="press">
          
          <div>{newsList}</div>
          <div>{newsList}</div>
            
           
          </div>
         

            
          </div>
        </div>

      
    )
  }
  
}

export default news;