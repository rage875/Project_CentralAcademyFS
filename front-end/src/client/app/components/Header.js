import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';

import '../styles/Header.css';

import dropDownIcon from '../pics/iconic/person.svg';

class Header extends React.Component {
  render() {
    const navDropdownIcon = 
    (<img src= {dropDownIcon} className="dropDownIcon" alt="Icon" />);

    return (
    <Navbar bg="dark" expand="sm" variant="dark">
      <Navbar.Brand href="/">3D PrinNet</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-1" size="sm" />
          <Button variant="outline-info" size="sm">Search</Button>
        </Form>
        <DropdownButton alignRight size="sm" variant="dark" className="ml-sm-1"
          title={navDropdownIcon}
          id="dropdown-button-drop-down"
        >
          <NavDropdown.Item href="#join">Sign up</NavDropdown.Item>
          <NavDropdown.Item href="#login">Sign in</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#help">Help</NavDropdown.Item>
        </DropdownButton>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default Header;