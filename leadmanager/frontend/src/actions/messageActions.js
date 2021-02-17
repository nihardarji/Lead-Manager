import { CREATE_MESSAGE, RESET_MESSAGE } from "./types"

// CREATE MESSAGE
export const createMessage = msg => dispatch => {
    dispatch({
        type: CREATE_MESSAGE,
        payload: msg
    })

    setTimeout(() => dispatch({ type: RESET_MESSAGE }), 1000)
}