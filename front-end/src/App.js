import React from 'react';
import logo from './logo.svg';
import './App.css';

function displayLogo(){
  return(
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Edit <code>src/App.js</code> and save to reload.</p>
      <a className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer">Learn React
      </a>
    </header>
  </div>
  )
}

function createNavBar(){
  return(
    <div className = "Nav">
      <ul>
        <li><a href="/">Logo</a></li>
        <li><a href="/">Printer's profile</a></li>
      </ul> 
    </div>
  )
}

function App() {
  return (
    displayLogo()
  );
}

export default App;
