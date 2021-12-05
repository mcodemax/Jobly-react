import React, {useContext} from "react";
import UserContext from "./auth/UserContext";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

const NavBar = ({logout}) => {
    const { currentUser } = useContext(UserContext);

    function showLoggedIn() {
        return (
            <>
                <NavLink to="/user/profile" className="navbar-brand">
                    Jobly
                </NavLink>

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

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/" onClick={logout}>LogOut</NavLink>
                    </NavItem>
                </Nav>
            </>
        )    
    }

    function showLoggedOut() {
        return (
            <>
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

                
            </>
        )    
    }

    return (
    <>
        <div>
            <Navbar expand="md">
                

                { currentUser ? showLoggedIn() : showLoggedOut() }
            </Navbar>
        </div>            
    </>
    );
}

export default NavBar;