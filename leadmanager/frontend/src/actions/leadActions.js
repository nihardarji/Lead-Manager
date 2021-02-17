import axios from 'axios'
import { createMessage } from './messageActions'
import { ADD_LEAD, DELETE_LEAD, GET_ERRORS, GET_LEADS, RESET_ERRORS } from './types'

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

        dispatch(createMessage({ deleteLead: 'Lead Deleted' }))
    } catch (error) {
        console.log(error)
    }
}

// ADD LEAD
export const addLead = (lead) => async dispatch => {
    try {
        const { data } = await axios.post(`/api/leads/`, lead)

        dispatch({
            type: ADD_LEAD,
            payload: data
        })

        dispatch(createMessage({ addLead: 'Lead Added' }))
    } catch (error) {
        const errors = {
            msg: error.response.data,
            status: error.response.status
        }
        dispatch({
            type: GET_ERRORS,
            payload: errors
        })
        setTimeout(() => dispatch({ type: RESET_ERRORS }), 1000)
    }
}