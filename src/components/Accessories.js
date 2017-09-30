import React, {Component} from 'react'
import accessories from '../data/accessories'
import Helmet from "react-helmet"

class Accessories extends Component {
  render() {
    return (
    <div className="itemSection" >
      <Helmet>
        <title>Accessories</title>
      </Helmet>
      {accessories.map(accessory =>{
        return (
          <div className="itemDiv" key={accessory.id}>
              <img className="itemImage" src={accessory.img_url} alt=""/>
              <div className="detailDiv">
                <div className="detail">Name: {accessory.name} </div>
                <div className="detail">Price: ${accessory.price}</div>
                <div className="detail">Year: {accessory.year} </div>
              </div>
          </div>
          )
        })
      }
    </div>
    )
  }
}

export default Accessories
