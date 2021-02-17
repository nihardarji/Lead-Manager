import React from 'react'
import { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addLead } from '../../actions/leadActions'

const AddLeadForm = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


    const submitHandler = e => {
        e.preventDefault()
        dispatch(addLead({ name, email, message }))
        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <Card className='my-4'>
            <Card.Body>
                <h2>Add Lead</h2>
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                    </Form.Group>
                    <Button size='lg' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default AddLeadForm
