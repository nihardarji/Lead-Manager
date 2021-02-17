import { combineReducers } from 'redux'
import leadReducers from './leadReducers'
import alertReducers from './alertReducers'

export default combineReducers({
    leadReducers,
    alertReducers
})
