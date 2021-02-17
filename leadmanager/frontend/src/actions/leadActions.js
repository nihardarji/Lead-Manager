import axios from 'axios'
import { GET_LEADS } from './types'

export const getLeads = () => async dispatch => {
    try {
        const { data } = await axios.get('/api/leads/')

        dispatch({
            type: GET_LEADS,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}