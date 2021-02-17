import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = e => {
        e.preventDefault()
    }

    return (
        <Col xs={12} lg={7} className='m-auto'>
            <Card className='mt-4'>
                <Card.Body>
                    <h2 className='text-center'>Login</h2>
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
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Enter password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button size='lg' variant="primary" type="submit">
                            Login
                        </Button>
                        <p className='my-2'>
                            Don't have an account?{'  '}
                            <Link to='/register'>Register</Link>
                        </p>
                    </Form>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Login
