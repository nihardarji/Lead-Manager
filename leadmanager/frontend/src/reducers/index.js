import { combineReducers } from 'redux'
import leadReducers from './leadReducers'
import alertReducers from './alertReducers'
import messageReducers from './messageReducers'
import authReducers from './authReducers'

export default combineReducers({
    leadReducers,
    alertReducers,
    messageReducers,
    authReducers
})
