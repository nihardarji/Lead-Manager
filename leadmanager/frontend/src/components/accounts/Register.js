import React, { useState } from 'react'
import { Button, Card, Col, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const submitHandler = e => {
        e.preventDefault()
    }

    return (
        <Col xs={12} lg={7} className='m-auto'>
            <Card className='mt-4'>
                <Card.Body>
                    <h2 className='text-center'>Register</h2>
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="formName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
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
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Enter password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword2">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Enter password"
                                value={password2}
                                onChange={e => setPassword2(e.target.value)}
                            />
                        </Form.Group>
                        <Button size='lg' variant="primary" type="submit">
                            Register
                        </Button>
                        <p className='my-2'>
                            Already have an account?{'  '}
                            <Link to='/login'>Login</Link>
                        </p>
                    </Form>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Register
