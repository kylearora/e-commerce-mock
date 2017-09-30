import React, {Component} from 'react'
import Helmet from "react-helmet"

class About extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>About</title>
        </Helmet>
        <div className="aboutDiv">
          <h1 className="aboutText">This is a mock E-Commerce website built in React and created and designed by Kyle Arora</h1>
        </div>
      </div>
    )
  }
}

export default About
