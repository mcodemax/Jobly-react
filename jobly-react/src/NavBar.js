import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

const NavBar = () => {
    return (
    <>
        <div>
            <Navbar expand="md">
                <NavLink to="/" className="navbar-brand">
                    Jobly
                </NavLink>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/login">Login</NavLink>
                    </NavItem>
                </Nav>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/signup">Sign Up</NavLink>
                    </NavItem>
                </Nav>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/companies">Companies</NavLink>
                    </NavItem>
                </Nav>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/jobs">Jobs</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>            
    </>
    );
}

export default NavBar;