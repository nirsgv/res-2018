import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import player from './player'

export default combineReducers({
  router: routerReducer,
  counter,
  player
})
