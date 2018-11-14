import React from 'react';
import ReactDOM from 'react-dom';
import './packs/application.css';

import Front from './services/front/front';
import { Provider } from 'react-redux'
import { store } from './services/store'

//ReactDOM.render(<Front />, document.getElementById('root'));

ReactDOM.render(
  <Provider store={store}>
    <Front/>
  </Provider>,
  document.getElementById('frontapp')
)
