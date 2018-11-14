import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { store } from '../services/store'

import City from '../services/city/city'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <City/>
    </Provider>,
    document.getElementById('regionapp')
  )
})
