import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Lead Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
