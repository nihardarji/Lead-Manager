import axios from 'axios'
import { returnErrors } from './messageActions'
import { AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, USER_LOADED, USER_LOADING } from './types'

// CHECK TOKEN & LOAD USER
export const loadUser = () => async (dispatch, getState) => {
    try {
        // User Loading
        dispatch({ type: USER_LOADING })

        const token = getState().authReducers.token

        // Headers
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        //  If Token add to headers config
        if(token){
            config.headers['Authorization'] = `Token ${token}`
        }

        const { data } = await axios.get('/api/auth/user', config)

        dispatch({
            type: USER_LOADED,
            payload: data
        })
    } catch (error) {
        dispatch(returnErrors(error.response.data, error.response.status))
        dispatch({ type: AUTH_ERROR })
    }
}

// LOGIN USER
export const login = (username, password) => async dispatch => {
    try {
        // Headers
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        // Request Body
        const body = JSON.stringify({ username, password })

        const { data } = await axios.post('/api/auth/login', body, config)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch(returnErrors(error.response.data, error.response.status))
        dispatch({ type: LOGIN_FAIL })
    }
}

// LOGOUT USER
export const logout = () => async (dispatch, getState) => {
    try {
        const token = getState().authReducers.token

        // Headers
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        //  If Token add to headers config
        if(token){
            config.headers['Authorization'] = `Token ${token}`
        }

        await axios.post('/api/auth/logout', null, config)

        dispatch({ type: LOGOUT_SUCCESS })
    } catch (error) {
        dispatch(returnErrors(error.response.data, error.response.status))
    }
}
