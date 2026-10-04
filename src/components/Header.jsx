import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../assets/logo.svg'
import Button from 'react-bootstrap/Button';


function Header() {
  return (
    <Navbar className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
          
        </Container>
      </Navbar>
  )
}

export default Header