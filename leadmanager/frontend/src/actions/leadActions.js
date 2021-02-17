import axios from 'axios'
import { DELETE_LEAD, GET_LEADS } from './types'

// GET LEADS
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

// DELETE LEAD
export const deleteLead = (id) => async dispatch => {
    try {
        const { data } = await axios.delete(`/api/leads/${id}/`)

        dispatch({
            type: DELETE_LEAD,
            payload: id
        })
    } catch (error) {
        console.log(error)
    }
}