import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { store } from '../services/store'

import Country from '../services/country/country'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Country/>
    </Provider>,
    document.getElementById('countryapp')
  )
})
