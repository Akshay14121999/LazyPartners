import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import { BrowserRouter , Route } from 'react-router-dom' 
import portfolio from './components/portfolio';
import About from './components/About'
import Teams from './components/Teams'
import News from './components/News'
import ReachUs from './components/ReachUs'
import home from './components/home'

function App() {
  return (
    <BrowserRouter>
    <div className="upperContainer">  
      <div className="App">
      {/* <h1>Welcome to React!!</h1> */}
      <Navbar />
      <Route exact path="/" component={home}></Route>
      <Route path="/portfolio" component={portfolio}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/teams" component={Teams}></Route>
      <Route path="/news" component={News}></Route>
      <Route path="/reach-us" component={ReachUs}></Route>

   
      </div>

      <div className="footer">

        <div>
          <h4>Discover</h4>
          <a href="/portfolio">Portfolio</a><br></br>
          <a href="/Teams">Teams</a><br></br>
          <a href="/About">About</a><br></br>
          <a href="/News">News</a><br></br>
          <a href="/ReachUs">Reach Us</a><br></br>
        </div>
        <div>
          <h4>Connect</h4>
          <span>+91 9999999999</span><br></br>
          <span>xyz@lazypartners.com</span>
        </div>
        <div className="subscribe">
          <h4>Subscribe to our newsletter</h4><br></br>
          <span>Type your email address here please</span><br></br>
          <input type="email"></input><br></br><br></br>
          <button id="myButton">Subscribe Now</button>
        </div>
      </div>

      <div className="Copyright">
        <h5>@2017LazyPartners. All Rights Reserved</h5>
      </div>

    </div>
    </BrowserRouter>
    
  );
}

export default App;
