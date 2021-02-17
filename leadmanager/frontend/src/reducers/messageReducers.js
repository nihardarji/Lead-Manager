import { CREATE_MESSAGE, RESET_MESSAGE } from "../actions/types"

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_MESSAGE:
            return (state = action.payload)
        
        case RESET_MESSAGE:
            return {}
        
        default:
            return state
    }
}