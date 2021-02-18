import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const authReducers = useSelector(state => state.authReducers)

    return (
        <Route
            {...rest}
            render={props => {
                if(authReducers.isLoading){
                    return <ProgressBar className='my-5' animated now={100} variant="info"/>
                } else if(!authReducers.isAuthenticated) {
                    return <Redirect to='/login' />
                } else {
                    return <Component {...props} />
                }
            }}
        />
    )
}

export default PrivateRoute
