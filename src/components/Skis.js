import React, {Component} from 'react'
import skis from '../data/skis'
import Helmet from "react-helmet"
import {Link} from 'react-router-dom'

class Skis extends Component {
  render() {
    return (
    <div className="itemSection" >
      <Helmet>
        <title>Skis</title>
      </Helmet>
    {skis.map(ski =>{
      return (
        <Link className="detailLink" to={`/skis/${ski.id}`} key={ski.id}>
          <div className="itemDiv">
              <img className="itemImage" src={ski.img_url} alt=""/>
              <div className="detailDiv">
                <div className="detail">Name: {ski.name} </div>
                <div className="detail">Price: ${ski.price}</div>
                <div className="detail">Year: {ski.year} </div>
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

export default Skis
