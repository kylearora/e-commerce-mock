import React, {Component} from 'react'
import skis from '../data/skis'
import Helmet from "react-helmet"

class Skis extends Component {
  render() {
    return (
    <div className="itemSection" >
      <Helmet>
        <title>Skis</title>
      </Helmet>
    {skis.map(ski =>{
      return (
        <div className="itemDiv" key={ski.id}>
            <img className="itemImage" src={ski.img_url} alt=""/>
            <div className="detailDiv">
              <div className="detail">Name: {ski.name} </div>
              <div className="detail">Price: ${ski.price}</div>
              <div className="detail">Year: {ski.year} </div>
            </div>
        </div>
        )
      })
    }
    </div>
    )
  }
}

export default Skis
