import { combineReducers } from 'redux'
import theaterReducer from './theaterReducer.js'
import productionReducer from './productionReducer.js'

const rootReducer = combineReducers({
    theaterReducer,
    productionReducer,
})

export default rootReducer; 