import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteLead, getLeads } from '../../actions/leadActions'

const Leads = () => {
    const dispatch = useDispatch()

    const leadReducers = useSelector(state => state.leadReducers)
    const { leads } = leadReducers

    useEffect(() => {
        dispatch(getLeads())
    },[dispatch])

    const deleteHandler = (id) => {
        dispatch(deleteLead(id))
    }

    return (
        <div>
            <h2>Leads</h2>
            <Table responsive striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {leads.map(lead => (
                        <tr key={lead.id}>
                            <td>{lead.id}</td>
                            <td>{lead.name}</td>
                            <td>{lead.email}</td>
                            <td>{lead.message}</td>
                            <td>
                                <Button 
                                    onClick={() => deleteHandler(lead.id)} 
                                    variant="danger" 
                                    size='sm'
                                >
                                    Delete
                                </Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Leads
