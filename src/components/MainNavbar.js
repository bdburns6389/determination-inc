import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem
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
      dropdownOpen: false,
      color: "transparent"
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  listenScrollEvent = e => {
    if (window.scrollY > 200) {
      this.setState({ color: "black" });
    } else {
      this.setState({ color: "transparent" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
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
<<<<<<< HEAD
        <Navbar color={this.state.color} dark expand="md" fixed="top">
=======
        <Navbar
          style={{ backgroundColor: "black" }}
          dark
          expand="md"
          fixed="top"
        >
>>>>>>> 1ce1a3de3be9ad077925adeba4faeb2cfec77519
          <NavbarBrand href="/" style={{ color: "white" }}>
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
                listStyleType: "none",
                padding: "5px"
              }}
            >
              <a href="#about" style={{ color: "white" }}>
                About
              </a>
            </NavItem>
            <NavItem
              style={{
                listStyleType: "none",
                textDecoration: "none",
                padding: "5px"
              }}
            >
              <a href="#bigCalendar" style={{ color: "white" }}>
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
