import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

let store = createStore(TodoApp,applyMiddleware(thunk))

//store.dispatch(loadWeatherInfo())

render(
  <Root store={store} />,
  document.getElementById('dashboard')
)