import React from 'react'
import { Container } from 'react-bootstrap'
import ReactDOM from 'react-dom'
import Header from './layout/Header'
import Dashboard from './leads/Dashboard'

export const App = () => {
    return (
        <>
            <Header />
            <Container>
                <Dashboard />
            </Container>
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)