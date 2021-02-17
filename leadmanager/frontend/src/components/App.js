import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '../store'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { Container } from 'react-bootstrap'
import Header from './layout/Header'
import Dashboard from './leads/Dashboard'
import Alerts from './layout/Alerts'

// Alert Options
const alertOptions = {
    timeout: 3000,
    position: 'top right'
}

export const App = () => {
    return (
        <AlertProvider template={AlertTemplate} {...alertOptions} >
            <Header />
            <Alerts />
            <Container>
                <Dashboard />
            </Container>
        </AlertProvider>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)