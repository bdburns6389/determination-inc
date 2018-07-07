import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div id="footer" style={{ alignText: "left" }}>
        <div className="container-fluid text-left copyrights">
          <div className="">
            <p>
              &copy; Built and Maintained By{" "}
              <a href="http://www.bdburns6389.com" rel="nofollow">
                Brian Burns
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
