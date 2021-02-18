import { AUTH_ERROR, USER_LOADED, USER_LOADING } from '../actions/types'

const initialState = {
    token: localStorage.getItem('tokne'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }

        case AUTH_ERROR:
            localStorage.removeItem('token')
            return initialState
        
        default:
            return state
    }
}