

import { combineReducers } from 'redux'
import theaterReducer from './theaterReducer'
import productionReducer from './productionReducer'

const rootReducer = combineReducers({
    theaterReducer,
    productionReducer,
})

export default rootReducer; 