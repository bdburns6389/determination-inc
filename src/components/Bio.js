import React, { Component } from "react";
import BioPic from "../bioPic.jpg";
class Bio extends Component {
  render() {
    return (
      <div id="about" className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div>
              <img
                src={BioPic}
                alt=""
                style={{ maxHeight: "100%", maxWidth: "100%" }}
                className="img-responsive rounded"
              />
            </div>
          </div>
          <div
            className="col-xs-12 col-md-6"
            style={{
              verticalAlign: "middle",
              display: "inline-block",
              float: "none"
            }}
          >
            <p>
              Kyle J Smith is the founder of Determination, Incorporated. He is
              an entrepreneurial ecosystem builder in Kansas City, Missouri.
              After two years with KCSourceLink, an internationally-replicated
              central hub for all things entrepreneurship, Kyle started
              Determination, Incorporated.
            </p>
            <hr
              style={{
                width: "60%",
                height: "4px",
                border: "none",
                color: "#333",
                backgroundColor: "#333"
              }}
            />
            <p>
              Kyle volunteers as a community organizer with 1 Million Cups
              Kansas City, the birthplace of the Kauffman Foundation-supported
              program, and a Startup Huddle ambassador with the Global
              Entrepreneurship Network.
              <hr
                style={{
                  width: "60%",
                  height: "4px",
                  border: "none",
                  color: "#333",
                  backgroundColor: "#333"
                }}
              />
              <p>
                <a href="mailto:bdburns6389@gmail.com">Email Him</a>
              </p>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;
