import React, {Component} from 'react'
import snowboards from '../data/snowboards'
console.log(snowboards)

class SnowboardDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: [this.props.match.params.id]
    }
  }
  render() {
    return (
    <div className="itemSection" >
    {this.state.item.map(snowboard =>{
      console.log(snowboard.name)
      return (
        <div className="itemDiv" >
            <img className="itemImage" src={snowboard.img_url} alt=""/>
            <div className="detailDiv">
              <div className="detail">Name: {snowboard.name} </div>
              <div className="detail">Price: ${snowboard.price}</div>
              <div className="detail">Type: {snowboard.type}</div>
              <div className="detail">Year: {snowboard.year} </div>
              <div className="detail">{snowboard.description}</div>
            </div>
        </div>
        )
      })
    }
    </div>
    )
  }
}


export default SnowboardDetail
