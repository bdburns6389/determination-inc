import React, { Component } from "react";
import { TinyLetter } from "react-tinyletter";

class TinyLetterSubscribe extends Component {
  render() {
    return (
      <div id="about">
        <p>
          Keep up with <strong>Determination, Incorporated</strong>, sign up for
          the newsletter:
        </p>
        <TinyLetter list="bdburns6389" />
      </div>
    );
  }
}

export default TinyLetterSubscribe;
