// Packages
import React from "react";
import Route from "react-router-dom/Route"
import BrowserRouter from "react-router-dom/BrowserRouter"

// Pages
import Main from "../pages/main";
import Login from "../pages/login";
import Register from "../pages/register";
import About from "../pages/about";

// Styles
import "../styles/App.css";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Route exact path="/" component={Main}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/about" component= {About}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
