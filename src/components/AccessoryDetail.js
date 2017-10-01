import React, {Component} from 'react'
import accessories from '../data/accessories'
import Helmet from "react-helmet"
console.log(accessories)


class AccessoryDetail extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      accessoryItem: [accessories[this.props.match.params.id - 1]]
    }
  }
  render() {
    console.log(this.state.accessoryItem)
    return (
    <div className="itemSection" >
      <Helmet>
        <title>{this.state.accessoryItem[0].name}</title>
      </Helmet>
        <div className="itemDetailDiv">
            <img className="itemDetailImage" src={this.state.accessoryItem[0].img_url} alt=""/>
            <div className="detailDiv">
              <div className="itemDetailName">{this.state.accessoryItem[0].name} </div>
              <div className="itemDetail">${this.state.accessoryItem[0].price}</div>
              <div className="itemDetail"> {this.state.accessoryItem[0].description}</div>
            </div>
        </div>
    </div>
    )
  }
}


export default AccessoryDetail
