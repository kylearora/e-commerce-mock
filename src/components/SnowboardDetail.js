import React, {Component} from 'react'
import snowboards from '../data/snowboards'
import Helmet from "react-helmet"
console.log(snowboards)


class SnowboardDetail extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      snowboardItem: [snowboards[this.props.match.params.id - 1]]
    }
  }
  render() {
    console.log(this.state.snowboardItem)
    return (
    <div className="itemSection" >
      <Helmet>
        <title>{this.state.snowboardItem[0].name}</title>
      </Helmet>
        <div className="itemDetailDiv">
            <img className="itemDetailImage" src={this.state.snowboardItem[0].img_url} alt=""/>
            <div className="detailDiv">
              <div className="itemDetailName">{this.state.snowboardItem[0].name} </div>
              <div className="itemDetail">${this.state.snowboardItem[0].price}</div>
              <div className="itemDetail">Type: {this.state.snowboardItem[0].type}</div>
              <div className="itemDetail">Year: {this.state.snowboardItem[0].year} </div>
              <div className="itemDetail"> {this.state.snowboardItem[0].description}</div>
            </div>
        </div>
    </div>
    )
  }
}


export default SnowboardDetail
