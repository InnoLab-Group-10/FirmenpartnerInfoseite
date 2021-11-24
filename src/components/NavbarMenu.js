import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';

const NavbarMenu = () => {
	return <div>
    <Container>
      <Navbar className="main-menu" bg="light" expand="lg" sticky="top">
          <Navbar.Brand className="site-logo" href="#">
            <img
            alt=""
            src="holder.js/32x32"
            width="30"
            height="30"
            className="d-inline-block align-top"
            />{' '}
            <span>Seitentitel</span>
          </Navbar.Brand>
          <Navbar.Toggle className="menu-button" aria-controls="navbarScroll"/>
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav
              className="mr-auto my-2 my-lg-0"
            >
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#dual">Link 1</Nav.Link>
              <Nav.Link href="#testimonials">Link 2</Nav.Link>
              <Nav.Link href="#contact">Link 3</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </Container>
  </div>;
};

export default NavbarMenu;