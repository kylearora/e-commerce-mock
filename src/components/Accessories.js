import React, {Component} from 'react'
import accessories from '../data/accessories'
import Helmet from "react-helmet"
import {Link} from 'react-router-dom'

class Accessories extends Component {
  render() {
    return (
    <div className="itemSection" >
      <Helmet>
        <title>Accessories</title>
      </Helmet>
      {accessories.map(accessory =>{
        return (
          <Link className="detailLink" to={`/accessories/${accessory.id}`} key={accessory.id}>
            <div className="itemDiv" key={accessory.id}>
                <img className="itemImage" src={accessory.img_url} alt=""/>
                <div className="detailDiv">
                  <div className="detail">Name: {accessory.name} </div>
                  <div className="detail">Price: ${accessory.price}</div>
                  <div className="detail">Year: {accessory.year} </div>
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

export default Accessories
