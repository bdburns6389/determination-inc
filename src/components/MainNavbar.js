import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import facebook from "../facebook.png";
import twitter from "../twitter.png";
import instagram from "../instagram.png";

class NavbarFeatures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Router>
        <Navbar color="white" dark expand="md" fixed="top">
          <NavbarBrand href="/" style={{ color: "black" }}>
            <strong>Determination, Inc</strong>
          </NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              <NavItem active>
                <a href="https://facebook.com/determinationincorporated">
                  <img
                    src={facebook}
                    alt="facebook"
                    style={{ height: "30px", paddingLeft: "5px" }}
                  />
                </a>
              </NavItem>
              <NavItem>
                <a href="https://twitter.com/bizafterprison">
                  <img
                    src={twitter}
                    alt="twitter"
                    style={{ height: "30px", paddingLeft: "5px" }}
                  />
                </a>
              </NavItem>
              <NavItem>
                <a href="https://www.instagram.com/determinationincorporated/">
                  <img
                    src={instagram}
                    alt="instagram"
                    style={{ height: "30px", paddingLeft: "5px" }}
                  />
                </a>
              </NavItem>
            </NavbarNav>
            <NavbarNav right />
            <NavItem
              style={{
                color: "black",
                listStyleType: "none",
                padding: "5px"
              }}
            >
              <a href="#about" style={{ color: "black" }}>
                About
              </a>
            </NavItem>
            <NavItem
              style={{
                color: "black",
                listStyleType: "none",
                textDecoration: "none",
                padding: "5px"
              }}
            >
              <a href="#bigCalendar" style={{ color: "black" }}>
                Calendar
              </a>
            </NavItem>
          </Collapse>
        </Navbar>
      </Router>
    );
  }
}

export default NavbarFeatures;
