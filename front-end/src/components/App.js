// Packages
import React from 'react';
import Route from 'react-router-dom/Route'
import BrowserRouter from 'react-router-dom/BrowserRouter'

// Pages
import Login from '../pages/login';

// Components
import HeaderMain from './HeaderMain';

// Styles
import '../styles/App.css';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Route exact path="/" component={HeaderMain}/>
        <Route exact path="/login" component={Login}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
