import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class HeaderDefault extends React.Component {
  render() {
    return (
      <Navbar bg="dark" expand="sm" variant="dark">
        <Navbar.Brand href="/">
        <img src=
            "../../MainIcon.png" width="30" height="30"
            className="d-inline-block align-top"
            alt="" /> 3D PrinNet
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default HeaderDefault;
