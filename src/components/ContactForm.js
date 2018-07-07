import React, { Component } from "react";

class ContactForm extends Component {
  render() {
    return (
      <div id="about" className="container-fluid">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdCccqzeXWHkVTdvjkNwYoN395-pqc9k0d3KYCzFjJNcWtSjw/viewform?embedded=true"
          width="700"
          height="900"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading...
        </iframe>
      </div>
    );
  }
}

export default ContactForm;
