import axios from 'axios'
import { createMessage, returnErrors } from './messageActions'
import { tokenConfig } from './authActions'
import { ADD_LEAD, DELETE_LEAD, GET_LEADS } from './types'


// GET LEADS
export const getLeads = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.get('/api/leads/', tokenConfig(getState))

        dispatch({
            type: GET_LEADS,
            payload: data
        })
    } catch (error) {
        dispatch(returnErrors(error.response.data, error.response.status))
    }
}

// DELETE LEAD
export const deleteLead = (id) => async (dispatch, getState) => {
    try {
        await axios.delete(`/api/leads/${id}/`, tokenConfig(getState))

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
export const addLead = (lead) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post(`/api/leads/`, lead, tokenConfig(getState))

        dispatch({
            type: ADD_LEAD,
            payload: data
        })

        dispatch(createMessage({ addLead: 'Lead Added' }))
    } catch (error) {
        dispatch(returnErrors(error.response.data, error.response.status))
    }
}