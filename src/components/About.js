import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div id="about">
        <p style={{ fontSize: "18pt" }}>
          <strong>Determination, Incorporated</strong> is a Kansas City-based
          nonprofit creating a “felony-friendly” path to entrepreneurship. We
          take a community-based, story-led approach to help currently and
          formerly incarcerated people adopt the entrepreneurial mindset in
          order to re-enter their communities successfully, stay out of
          incarceration, start businesses and become job creators. In short, we
          are working together to help people behind bars grow businesses.
        </p>
        <hr style={{ height: "20px" }} />
        <p style={{ fontSize: "18pt" }}>
          Be the Boss is a business support group for formerly incarcerated
          people. At each session, experts from the entrepreneurial community
          present followed by group discussion.
          <br />
          <br />
          2nd and 4th Thursdays at UMKC Innovation Center, 6:30 PM: 4747 Troost,
          KCMO 64110
          <br />
          <br />
          3rd Mondays at Bluford Library, 5 PM: 3050 Prospect Ave, KCMO 64128
        </p>
      </div>
    );
  }
}

export default About;
