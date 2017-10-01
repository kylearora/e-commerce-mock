import React, {Component} from 'react'
import skis from '../data/skis'
import Helmet from "react-helmet"
console.log(skis)


class SkiDetail extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      skiItem: [skis[this.props.match.params.id - 1]]
    }
  }
  render() {
    console.log(this.state.skiItem)
    return (
    <div className="itemSection" >
      <Helmet>
        <title>{this.state.skiItem[0].name}</title>
      </Helmet>
        <div className="itemDetailDiv">
            <img className="itemDetailImage" src={this.state.skiItem[0].img_url} alt=""/>
            <div className="detailDiv">
              <div className="itemDetailName">{this.state.skiItem[0].name} </div>
              <div className="itemDetail">${this.state.skiItem[0].price}</div>
              <div className="itemDetail">Year: {this.state.skiItem[0].year} </div>
              <div className="itemDetail"> {this.state.skiItem[0].description}</div>
            </div>
        </div>
    </div>
    )
  }
}


export default SkiDetail
