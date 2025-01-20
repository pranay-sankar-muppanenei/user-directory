import {Component} from 'react'

import LangaugeContext from '../../context/LanguageContext'

import {R, I, C, He, K} from './styledComponents'

class Notfound extends Component {
  render() {
    return (
      <LangaugeContext.Consumer>
        {value => {
          const {Active} = value

          return (
            <>
              <R>
                <C Active={Active}>
                  {Active && (
                    <I
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                      alt="not found"
                    />
                  )}
                  {!Active && (
                    <I
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
                      alt="not found"
                    />
                  )}
                  <He Active={Active}>Page Not Found</He>
                  <K>
                    we are sorry, the page you requested could not be found.
                  </K>
                </C>
              </R>
            </>
          )
        }}
      </LangaugeContext.Consumer>
    )
  }
}

export default Notfound
