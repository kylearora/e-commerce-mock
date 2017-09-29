import React, {Component} from 'react'
import {NavLink} from "react-router-dom"

class BaseLayout extends Component {
  render () {
    return (
      <div>

          <div className ="logoDiv">
              <NavLink to="/"><i className="fa fa-snowflake-o fa-5x" aria-hidden="true"></i></NavLink>
          </div>

          <header className="titleHeader">
            <NavLink to="/" className="title">TIY Sports and Outdoors</NavLink>
          </header>

          <nav>
            <div>
              <NavLink className="NavLink" to="/snowboards">Snowboards</NavLink>
              <i className="fa fa-snowflake-o" aria-hidden="true"></i>

              <NavLink className="NavLink" to="/skiis">Skiis</NavLink>
              <i className="fa fa-snowflake-o" aria-hidden="true"></i>

              <NavLink className="NavLink" to="/accessories">Accessories</NavLink>
              <i className="fa fa-snowflake-o" aria-hidden="true"></i>

              <NavLink className="NavLink" to="/about">About</NavLink>
              <i className="fa fa-snowflake-o" aria-hidden="true"></i>

              <NavLink className="NavLink" to="/contact">Contact</NavLink>
            </div>
          </nav>
          {this.props.children}
        
      </div>
    )
  }
}

export default BaseLayout
