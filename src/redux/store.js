// import external modules
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

// import internal modules
import rootReducer from '../redux/reducers/rootReducer'

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
  key: 'Purple Bank',
  storage,
  whitelist: ['purpleData'], // reducer to persist
}

const pReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  pReducer,
  composeEnchancers(applyMiddleware(thunk))
)

export const persistor = persistStore(store)
