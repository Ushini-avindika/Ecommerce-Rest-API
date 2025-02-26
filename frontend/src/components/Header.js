import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
import './style.css'
const Header = () => {
      return (
            <header >
                  <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
                        <Container>
                              <LinkContainer to='/'>
                                    <Navbar.Brand className='font'>Madush's Shop</Navbar.Brand>
                              </LinkContainer>
                              <Navbar.Toggle aria-controls='basic-navbar-nav' />
                              <Navbar.Collapse id='basic-navbar-nav'>
                                    <Nav className='nv font1'>
                                          <LinkContainer to='/cart'>
                                                <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
                                          </LinkContainer>
                                          <LinkContainer to='/login'>
                                                <Nav.Link> <i className='fas fa-user'></i>Sign In</Nav.Link>
                                          </LinkContainer>
                                    </Nav>
                              </Navbar.Collapse>
                        </Container>
                  </Navbar>
            </header >
      )
}

export default Header

