import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
      return (
            <div className="navBar-container">
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
                <Link to="/"><Navbar.Brand href="" className="navbarBrand"> <img src={logo} alt="" /></Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav >
                        <Link to="/" className="NavbarLink">Host your home</Link>
                        <Link to="/experiences" className="NavbarLink">Host your experience</Link>
                        <Link to="/help" className="NavbarLink">Help</Link>
                        <Link to="/login"><Button className="signIn-btn" variant="success">Sign In</Button></Link>
                        
                        <Link to="/signup"><Button className="signUp-btn ml-3" variant="success">Sign Up</Button></Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
        </div>
      );
};

export default Header;