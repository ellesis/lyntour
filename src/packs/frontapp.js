import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { store } from '../services/store'

import Front from '../services/front/front'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Front/>
    </Provider>,
    document.getElementById('frontapp')
  )
})
