import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/authActions'

const Header = () => {
    const dispatch = useDispatch()

    const authReducers = useSelector(state => state.authReducers)
    const { isAuthenticated, user } = authReducers

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Link className='navbar-brand' to='/'>Lead Manager</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {isAuthenticated ? (
                        <Nav className="ml-auto">
                            <Navbar.Text className='mr-3' style={{ textTransform: 'capitalize' }}>
                                {user && `Welcome ${user.username}`}
                            </Navbar.Text>
                            <Button className='btn btn-dark nav-link' onClick={logoutHandler}>Logout</Button>
                        </Nav>
                    ) : (
                        <Nav className="ml-auto">
                            <Link to='/register' className='nav-link'>Register</Link>
                            <Link to='/login' className='nav-link'>Login</Link>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
