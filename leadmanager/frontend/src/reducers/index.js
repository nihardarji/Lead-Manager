import { combineReducers } from 'redux'
import leadReducers from './leadReducers'
import alertReducers from './alertReducers'
import messageReducers from './messageReducers'

export default combineReducers({
    leadReducers,
    alertReducers,
    messageReducers
})
