import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import store from '../store'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { Container } from 'react-bootstrap'

import PrivateRoute from './common/PrivateRoute'
import Header from './layout/Header'
import Dashboard from './leads/Dashboard'
import Alerts from './layout/Alerts'
import Register from './accounts/Register'
import Login from './accounts/Login'
import { loadUser } from '../actions/authActions'

// Alert Options
const alertOptions = {
    timeout: 3000,
    position: 'top right'
}

export const App = () => {

    useEffect(() => {
        store.dispatch(loadUser())
    }, [])

    return (
        <AlertProvider template={AlertTemplate} {...alertOptions} >
            <Router>
                <Header />
                <Alerts />
                <Container>
                    <Switch>
                        <PrivateRoute exact path='/' component={Dashboard} />
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/login' component={Login} />
                    </Switch>
                </Container>
            </Router>
        </AlertProvider>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)