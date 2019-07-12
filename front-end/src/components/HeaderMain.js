import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavLink from "react-router-dom/NavLink";
import withRouter from "react-router-dom/withRouter";

import "../styles/HeaderMain.css";

//import personIcon from "../pics/iconic/person.svg";
//import signupIcon from "../pics/iconic/plus.svg";
import personIcon from "../pics/user-profile.png";
import signupIcon from "../pics/user-plus-pink.png";
import signinIcon from "../pics/iconic/account-login.svg";
import aboutIcon from "../pics/iconic/question-mark.svg";


class HeaderMain extends React.Component {
  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? 'active' : '';
  }
  render() {
    const navDropdownIcon =
      (<img src={personIcon} className="dropDownIcon" alt="Icon"/>);
    const navSignupIcon =
      (<img src={signupIcon} className="align-top" width="20" height="20" alt="" />);
    const navSigninIcon =
      (<img src={signinIcon} width="15" height="15" alt="" />);
    const navAboutIcon =
      (<img src={aboutIcon} className="align-baseline" width="15" height="15" alt="" />);

    return (
      <Navbar bg="dark" expand="sm" variant="dark">
        <Navbar.Brand href="/">
          <img src=
            "../../MainIcon.png" width="30" height="30"
            className="d-inline-block align-top"
            alt="" /> 3D PrinNet
        </Navbar.Brand>
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
          <NavDropdown alignRight expand="sm" size="sm" variant="dark" className="ml-sm-1" 
            title={navDropdownIcon}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item className={this.getNavLinkClass("/register")}>
              {navSignupIcon}
              <NavLink to="/register" >Sign-up</NavLink>
            </NavDropdown.Item>

            <NavDropdown.Item className={this.getNavLinkClass("/login")}>
              {navSigninIcon}
              <NavLink to="/login" > Sign-in</NavLink>
            </NavDropdown.Item>

            <NavDropdown.Divider />
              
            <NavDropdown.Item className={this.getNavLinkClass("/about")}>
              {navAboutIcon}
              <NavLink to="/about" > About</NavLink>
            </NavDropdown.Item>

          </NavDropdown >
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

HeaderMain = withRouter(HeaderMain);
export default HeaderMain;
