import React, {Component} from 'react'
import Helmet from "react-helmet"

class Home extends Component {
  render () {
    return (
      <div className="mainImage">
        <Helmet>
          <title>Home</title>
        </Helmet>
        <div className="welcomeText">
          <h3>Winter is Coming...</h3>
          <h3>Get your winter gear now before the season starts!</h3>
        </div>
      </div>
    )
  }
}

export default Home
