// combine reducers in here

import { combineReducers } from 'redux'
import theaterReducer from './theaterReducer'

const rootReducer = combineReducers({
    theaterReducer
    
    // add other reducers 
    // don't put key in here
})

export default rootReducer; 