import {Component} from 'react'

import {CgProfile} from 'react-icons/cg'

import {IoLocationOutline} from 'react-icons/io5'

import {FaPhoneAlt, FaBuilding, FaArrowLeft} from 'react-icons/fa'

import {Link, withRouter} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import {MdEmail} from 'react-icons/md'

import LanguageContext from '../../context/LanguageContext'

import './index.css'

import {Container, Cardcontainer, Butta} from './styledComponents'

const api = {
  loading: 'loading',
  success: 'success',
  failure: 'failure',
}

class Usercard extends Component {
  state = {
    Loading: api.loading,
    DATA: [],
  }

  componentDidMount = async () => {
    await this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const x=Number(id)
    const url = `https://jsonplaceholder.typicode.com/users`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const Data = data.map(each => ({
        Address: {
          City: each.address.city,
          Street: each.address.street,
          Suite: each.address.suite,
          Zipcode: each.address.zipcode,
          Geo: {
            Lat: each.address.geo.lat,
            Lng: each.address.geo.lng,
          },
        },
        Company: {
          Bs: each.company.bs,
          CatchPhrase: each.company.catchPhrase,
          Name: each.company.name,
        },
        Email: each.email,
        Id: each.id,
        Name: each.name,
        Phone: each.phone,
        Username: each.username,
        Website: each.website,
      }))
      const DATA = Data.filter(each => each.Id === x)
      this.setState({DATA: DATA[0], Loading: api.success})
    } else {
      this.setState({Loading: api.failure})
    }
  }

  Load = () => (
    <div className="bang">
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="white" height="50" width="50" />
      </div>
    </div>
  )

  suc = () => {
    const {DATA} = this.state

    const {Name, Phone, Address, Company, Email, Username, Website} = DATA
    return (
      <Cardcontainer>
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
        <div className="cont20">
          <div className="rowd">
            <div className="row">
              <IoLocationOutline className="locationi" />
              <p className="loaction-text">{Address.City}</p>
            </div>
            <div className="row">
              <FaBuilding className="location" />
              <p className="loaction-text">{Company.Name}</p>
            </div>
          </div>
          <div className="row">
            <MdEmail className="location" />
            <p className="loaction-text">{Email}</p>
          </div>
        </div>
        <hr className="hri" />
        <div className="Column">
          <h3 className="catch">{Company.CatchPhrase}</h3>
          <h3 className="catch">
            <span className="c">Username: </span>
            {Username}
          </h3>
          <h3 className="catch">
            <span className="c">Website: </span>
            {Website}
          </h3>
        </div>
      </Cardcontainer>
    )
  }

  swim = Loading => {
    switch (Loading) {
      case api.loading:
        return this.Load()
      case api.success:
        return this.suc()
      default:
        return null
    }
  }

  render() {
    const {Loading} = this.state
    return (
      <LanguageContext.Consumer>
        {value => {
          const {Active} = value
          return (
            <>
              <Container Active={Active}>
                <Link to="/">
                  <div className="w10">
                    <Butta Active={Active}>
                      <FaArrowLeft />
                    </Butta>
                  </div>
                </Link>
                <div className="w90">{this.swim(Loading)}</div>
              </Container>
            </>
          )
        }}
      </LanguageContext.Consumer>
    )
  }
}

export default withRouter(Usercard)
