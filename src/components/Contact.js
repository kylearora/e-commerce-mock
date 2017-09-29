import React, {Component} from 'react'

class Contact extends Component {
  render() {
    return (
      <div>
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

          <div>
            <button className="submitButton" type="submit">Submit</button>
          </div>
        </form>
      </div>
      <footer>
        <h1>Thanks for shopping with us!</h1>
      </footer>
    </div>
    )
  }
}

export default Contact
