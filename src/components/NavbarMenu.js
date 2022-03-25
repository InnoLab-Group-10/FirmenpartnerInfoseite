import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

import logo from '../media/fh_technikum_wien_logo_4c_2020.svg';

const NavbarMenu = () => {
	return (
		<div>
			<Container>
				<Navbar
					className='main-menu'
					bg='light'
					expand='lg'
					sticky='top'
				>
					<Navbar.Brand className='site-logo' href='#'>
						<img
							alt='FH-Technikum Wien Logo'
							src={logo}
							width='90'
							className='d-inline-block align-top'
						/>{' '}
						<span hidden>Seitentitel</span>
					</Navbar.Brand>
					<Navbar.Toggle
						className='menu-button'
						aria-controls='navbarScroll'
					/>
					<Navbar.Collapse
						id='navbarScroll'
						className='justify-content-end'
					>
						<Nav className='mr-auto my-2 my-lg-0'>
							<Nav.Link href='#'>Home</Nav.Link>
							<Nav.Link href='#dual'>Duales Studium</Nav.Link>
							<Nav.Link href='#testimonials'>Partner</Nav.Link>
							<Nav.Link href='#contact'>Kontakt</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</div>
	);
};

export default NavbarMenu;
