import React from 'react'

const LanguageContext = React.createContext({
  Active: false,
  change: () => {},
})

export default LanguageContext
