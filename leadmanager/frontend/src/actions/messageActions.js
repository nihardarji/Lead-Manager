import { CREATE_MESSAGE, GET_ERRORS, RESET_ERRORS, RESET_MESSAGE } from "./types"

// CREATE MESSAGE
export const createMessage = msg => dispatch => {
    dispatch({
        type: CREATE_MESSAGE,
        payload: msg
    })

    setTimeout(() => dispatch({ type: RESET_MESSAGE }), 1000)
}

// RETURN ERRORS
export const returnErrors = (msg, status) => dispatch => {
    dispatch({
        type: GET_ERRORS,
        payload: { msg, status }
    })
    setTimeout(() => dispatch({ type: RESET_ERRORS }), 1000)
}