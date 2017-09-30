import React, {Component} from 'react'
import Helmet from "react-helmet"

class Contact extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Contact</title>
        </Helmet>
      <div className="contactDiv">
        <form action="">

          <label htmlFor="">Name:</label>
          <div>
            <input className="nameInput" type="text"/>
          </div>

          <label htmlFor="">Email:</label>
          <div>
            <input className="emailInput" type="email"/>
          </div>

          <label htmlFor="">Message:</label>
          <div>
            <textarea name="" id="" cols="80" rows="10"></textarea>
          </div>

          <div className="submitButtonDiv">
            <button className="submitButton" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
    )
  }
}

export default Contact
