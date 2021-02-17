import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '../store'
import { Container } from 'react-bootstrap'
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
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)