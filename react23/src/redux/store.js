
import { composeWithDevTools } from '@redux-devtools/extension'
import { createStore, applyMiddleware } from 'redux'
import { userReducer } from './user/user.reducer'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
let store = createStore(userReducer, composeWithDevTools(applyMiddleware(logger, thunk)))


export { store }