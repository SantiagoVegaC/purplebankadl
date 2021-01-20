/* import external modules */
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

/* import internal modules */
import initialState from './initialState'
import reducer from '../redux/reducers/rootReducer'

const store = createStore(reducer, initialState)

const ProviderMock = (props) => (
  <Provider store={store}>{props.children}</Provider>
)

export default ProviderMock
