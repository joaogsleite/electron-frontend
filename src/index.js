// react
import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

// recost
import initContext, { Provider } from 'recost'
import logger from 'recost-logger'
import reducer from './reducers'

// router and Root view
import { BrowserRouter } from 'react-router-dom'
import Root from './views/Root'

// multi lang
import 'config/locales'

import 'style/reset.scss'

const initialState = {}
initContext(initialState, reducer, [logger])


ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <Root/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
