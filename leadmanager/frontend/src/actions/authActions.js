import axios from 'axios'
import { returnErrors } from './messageActions'
import { AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, USER_LOADED, USER_LOADING, REGISTER_SUCCESS, REGISTER_FAIL } from './types'

// CHECK TOKEN & LOAD USER
export const loadUser = () => async (dispatch, getState) => {
    try {
        // User Loading
        dispatch({ type: USER_LOADING })

        const { data } = await axios.get('/api/auth/user', tokenConfig(getState))

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

// REGISTER USER
export const register = ({ username, email, password }) => async dispatch => {
    try {
        // Headers
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        // Request Body
        const body = JSON.stringify({ username, email, password })

        const { data } = await axios.post('/api/auth/register', body, config)

        dispatch({
            type: REGISTER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch(returnErrors(error.response.data, error.response.status))
        dispatch({ type: REGISTER_FAIL })
    }
}

// LOGOUT USER
export const logout = () => async (dispatch, getState) => {
    try {
        

        await axios.post('/api/auth/logout', null, tokenConfig(getState))

        dispatch({ type: LOGOUT_SUCCESS })
    } catch (error) {
        dispatch(returnErrors(error.response.data, error.response.status))
    }
}

// Setup config with token - helper
export const tokenConfig = getState => {
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

    return config
}