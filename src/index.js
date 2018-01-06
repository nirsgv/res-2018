import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './containers/app'

import 'sanitize.css/sanitize.css'
import './assets/css/style.css'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="app-wrp">
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
