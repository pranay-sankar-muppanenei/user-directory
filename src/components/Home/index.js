import './index.css'

import {Component} from 'react'

import {FaSearch, FaMoon} from 'react-icons/fa'

import {IoMdSunny} from 'react-icons/io'

import Loader from 'react-loader-spinner'

import LanguageContext from '../../context/LanguageContext'

import User from '../User'

import {
  BgContainer,
  Sidebar,
  Naming,
  Rad,
  Mt,
  Label,
  Mainbar,
  Searchcontainer,
  Searchcon,
  Search,
  Align,
  Sunbut,
  Moonbut,
  Kevvuu,
} from './styledComponent'

const api = {
  loading: 'loading',
  success: 'success',
  failure: 'failure',
}

class Home extends Component {
  state = {
    Data: [],
    Loading: api.loading,
    search: '',
    sort: '',
  }

  componentDidMount = () => {
    this.getData()
  }

  getData = async () => {
    const {search, sort} = this.state
    const url = `https://jsonplaceholder.typicode.com/users`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const dAta = data.filter(each =>
        each.name.toLowerCase().includes(search.toLowerCase()),
      )
      console.log(sort)
      if (sort === 'asc') {
        dAta.sort((a, b) => (a.name > b.name ? -1 : 1))
      } else if (sort === 'des') {
        dAta.sort((a, b) => (a.name > b.name ? 1 : -1))
      }
      console.log(dAta)
      const Data = dAta.map(each => ({
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
      this.setState({Data, Loading: api.success})
    } else {
      this.setState({Loading: api.failure})
    }
  }

  suc = () => {
    const {Data} = this.state
    return (
      <ul className="user-container">
        {Data.map(each => (
          <User each={each} key={each.Id} />
        ))}
      </ul>
    )
  }

  fail = () => (
    <h1 className="red">
      Something went wrong please try Reloading or Revisting
    </h1>
  )

  Load = () => (
    <div className="bang">
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="white" height="50" width="50" />
      </div>
    </div>
  )

  searchi = async event => {
    await this.setState({search: event.target.value})
  }

  lab = async event => {
    await this.setState(
      {sort: event.target.value, Loading: api.loading},
      this.getData,
    )
  }

  swim = Loading => {
    switch (Loading) {
      case api.loading:
        return this.Load()
      case api.success:
        return this.suc()
      case api.failure:
        return this.fail()
      default:
        return null
    }
  }

  click = async () => {
    await this.setState({Loading: api.loading}, this.getData)
  }

  render() {
    const {search, Loading} = this.state

    return (
      <LanguageContext.Consumer>
        {value => {
          const {Active, changed} = value
          return (
            <BgContainer>
              <Sidebar Active={Active}>
                <Align>
                  <div>
                    <Naming Active={Active}>Naming</Naming>
                    <Rad>
                      <Mt>
                        <input
                          type="radio"
                          name="q"
                          id="1"
                          value="asc"
                          onChange={this.lab}
                        />
                        <Label htmlFor="1" Active={Active}>
                          A-z
                        </Label>
                      </Mt>
                      <Mt>
                        <input
                          type="radio"
                          name="q"
                          id="2"
                          onChange={this.lab}
                          value="des"
                        />
                        <Label htmlFor="2" Active={Active}>
                          Z-A
                        </Label>
                      </Mt>
                    </Rad>
                  </div>
                </Align>
              </Sidebar>
              <Mainbar Active={Active}>
                <Align>
                  <Searchcontainer>
                    <Search
                      type="search"
                      placeholder="search"
                      onChange={this.searchi}
                      value={search}
                    />
                    <Searchcon
                      onClick={this.click}
                      type="button"
                      Active={Active}
                    >
                      <FaSearch className="search-img" />
                    </Searchcon>
                  </Searchcontainer>
                  <Kevvuu>
                    {Active ? (
                      <Sunbut onClick={changed}>
                        <IoMdSunny />
                      </Sunbut>
                    ) : (
                      <Moonbut onClick={changed}>
                        <FaMoon />
                      </Moonbut>
                    )}
                  </Kevvuu>
                </Align>

                {this.swim(Loading)}
              </Mainbar>
            </BgContainer>
          )
        }}
      </LanguageContext.Consumer>
    )
  }
}

export default Home
