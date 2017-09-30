import React, {Component} from 'react'
import {NavLink} from "react-router-dom"

class BaseLayout extends Component {
  render () {
    return (
      <div>
        <header>
          <div className ="logoDiv">
              <NavLink to="/"><i className="fa fa-snowflake-o fa-5x" aria-hidden="true"></i></NavLink>
          </div>

          <div className="titleHeader">
            <NavLink to="/" className="title">TIY Sports and Outdoors</NavLink>
          </div>

          <nav>
            <div>
              <NavLink className="NavLink" to="/snowboards">Snowboards</NavLink>
              <i className="fa fa-snowflake-o" aria-hidden="true"></i>

              <NavLink className="NavLink" to="/skis">Skis</NavLink>
              <i className="fa fa-snowflake-o" aria-hidden="true"></i>

              <NavLink className="NavLink" to="/accessories">Accessories</NavLink>
              <i className="fa fa-snowflake-o" aria-hidden="true"></i>

              <NavLink className="NavLink" to="/about">About</NavLink>
              <i className="fa fa-snowflake-o" aria-hidden="true"></i>

              <NavLink className="NavLink" to="/contact">Contact</NavLink>
            </div>
          </nav>
          </header>

          {this.props.children}

          <footer>
            <h1>Thanks for shopping with us!</h1>
          </footer>
      </div>
    )
  }
}

export default BaseLayout
