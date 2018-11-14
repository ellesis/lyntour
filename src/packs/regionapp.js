import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { store } from '../services/store'

import Region from '../services/region/region'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Region/>
    </Provider>,
    document.getElementById('regionapp')
  )
})
