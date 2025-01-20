import {Component} from 'react'

import {CgProfile} from 'react-icons/cg'

import {IoLocationOutline} from 'react-icons/io5'

import {FaPhoneAlt, FaBuilding} from 'react-icons/fa'

import {Link} from 'react-router-dom'

import {MdEmail} from 'react-icons/md'

import './index.css'

class User extends Component {
  render() {
    const {each} = this.props
    const {Name, Phone, Address, Company, Email, Id} = each
    return (
      <Link to={`/${Id}`} className="dec">
        <div className="user-card">
          <div className="cont1">
            <CgProfile className="pro" />
            <div className="column">
              <h2 className="name">{Name}</h2>
              <div className="row">
                <FaPhoneAlt className="star" />
                <p className="phone">{Phone}</p>
              </div>
            </div>
          </div>
          <hr className="hri" />
          <div className="cont2">
            <div className="row">
              <IoLocationOutline className="location" />
              <p className="loaction-text">{Address.City}</p>
            </div>
            <div className="row">
              <FaBuilding className="location" />
              <p className="loaction-text">{Company.Name}</p>
            </div>
            <div className="row">
              <MdEmail className="location" />
              <p className="loaction-text">{Email}</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default User
