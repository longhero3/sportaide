import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

let store = createStore(TodoApp)

render(
  <Root store={store} />,
  document.getElementById('dashboard')
)