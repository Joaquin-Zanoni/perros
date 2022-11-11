import React from 'react'
import {Link} from 'react-router-dom'


import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <Navbar bg="light" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#"><Link to='/'><img src="../assets/logo.jpg" alt="aaaa" /> </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link ><Link to='/Invocador'>Invocadores</Link></Nav.Link>
            <Nav.Link ><Link to='/Champs'>Champs</Link></Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}



export default NavBar