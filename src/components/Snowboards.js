import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Helmet from "react-helmet"
import snowboards from '../data/snowboards'

class Snowboards extends Component {
  render() {
    return (
    <div className="itemSection" >
      <Helmet>
        <title>Snowboards</title>
      </Helmet>
    {snowboards.map(snowboard =>{
      return (
        <Link className="detailLink" to={`/snowboards/${snowboard.id}`} key={snowboard.id}>
          <div className="itemDiv" >
              <img className="itemImage" src={snowboard.img_url} alt=""/>
              <div className="detailDiv">
                <div className="detail">Name: {snowboard.name} </div>
                <div className="detail">Price: ${snowboard.price}</div>
                <div className="detail">Type: {snowboard.type}</div>
                <div className="detail">Year: {snowboard.year} </div>
              </div>
          </div>
        </Link>
        )
      })
    }
    </div>
    )
  }
}

export default Snowboards
