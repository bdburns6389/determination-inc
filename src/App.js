import React, { Component } from "react";
import mainPic from "./sunrise.jpg";
import "./App.css";
import NavbarFeatures from "./components/MainNavbar";
import ScrollToTop from "react-scroll-up";
import Bio from "./components/Bio";
import Podcast from "./components/Podcast";
import Footer from "./components/Footer";
import UP from "./UP.png";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import TinyLetterSubscribe from "./components/TinyLetterSubscribe";

import moment from "moment";
import BigCalendar from "react-big-calendar";
import { getEvents } from "./gcal.js";
BigCalendar.momentLocalizer(moment);

// require("style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css");

class App extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }
  componentDidMount() {
    getEvents(events => {
      this.setState({ events });
    });
  }
  render() {
    return (
      <div className="App">
        <NavbarFeatures />
        <div>
          <img
            src={mainPic}
            style={{ width: "100%", height: "540px" }}
            alt="logo"
          />
          <h1
            style={{
              fontSize: "300%",
              color: "white"
            }}
          >
            <div class="centered">Determination, Incorporated</div>
          </h1>
        </div>

        <About />
        <div id="bigCalendar">
          <BigCalendar
            id="bigCalendar"
            style={{
              height: "420px",
              width: "70%",
              marginLeft: "auto",
              marginRight: "auto"
            }}
            views={["month"]}
            events={this.state.events}
          />
          {/*   GOOGLE_CALENDAR_ID */}
          {/*GOOGLE_CALENDAR_API_KEY */}
        </div>
        <br />
        <hr
          style={{
            width: "80%",
            height: "4px",
            border: "none",
            color: "#333",
            backgroundColor: "#333"
          }}
        />
        <br />

        <ContactForm />

        <hr />
        <br />
        <hr />

        <Bio />

        <br />
        <hr
          style={{
            width: "80%",
            height: "4px",
            border: "none",
            color: "#333",
            backgroundColor: "#333"
          }}
        />
        <br />

        <Podcast id="podcast" />

        <br />
        <hr
          style={{
            width: "80%",
            height: "4px",
            border: "none",
            color: "#333",
            backgroundColor: "#333"
          }}
        />
        <br />

        <TinyLetterSubscribe id="tinyLetter" />

        <br />
        <hr
          style={{
            width: "80%",
            height: "4px",
            border: "none",
            color: "#333",
            backgroundColor: "#333"
          }}
        />
        <br />

        <Footer />

        <ScrollToTop showUnder={160} duration={500}>
          <span>
            <img src={UP} alt="UP" />
          </span>
        </ScrollToTop>
      </div>
    );
  }
}

export default App;
