import React, { Component } from "react";
import BioPic from "../bioPic.jpg";
class Bio extends Component {
  render() {
    return (
      <div id="about">
        <img src={BioPic} alt="" style={{ margin: "auto" }} />
        <p>
          Kyle J Smith is the founder of Determination, Incorporated. He is an
          entrepreneurial ecosystem builder in Kansas City, Missouri. After two
          years with KCSourceLink, an internationally-replicated central hub for
          all things entrepreneurship, Kyle started Determination, Incorporated.
        </p>
        <br />
        <p>
          Kyle volunteers as a community organizer with 1 Million Cups Kansas
          City, the birthplace of the Kauffman Foundation-supported program, and
          a Startup Huddle ambassador with the Global Entrepreneurship Network.
        </p>
        <p>
          <a href="mailto:bdburns6389@gmail.com">Email Him</a>
        </p>
      </div>
    );
  }
}

export default Bio;
