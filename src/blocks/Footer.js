import React from 'react';
import {Container, Row, Col, Button, Nav} from 'react-bootstrap';
import SocialMediaBar from '../components/SocialMediaBar.js';
import Image from 'react-bootstrap/Image';

import logo from "../media/fh_technikum_wien_logo_4c_2020.svg";

const Footer = () => {
	return <div className="footer">
        <Container>
            <Row>
                <Col className="footer-column" lg={4}>
                    <Image src={logo} fluid />
                </Col>
                <Col className="footer-column" lg={4}>
                    <h5><strong>Links</strong></h5>
                    <ul className="footer-links">
                        <li>
                            <Nav.Link href="https://www.technikum-wien.at/impressum/" target="_blank">Impressum</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link href="https://www.technikum-wien.at/datenschutzerklaerung" target="_blank">Datenschutzerklärung</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link href="https://www.technikum-wien.at/erklaerung-zur-barrierefreiheit/" target="_blank">Barrierefreiheit</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link href="https://www.technikum-wien.at/studieninformationen/unser-campus/standorte-und-kontaktadressen/" target="_blank">Standorte & Kontakt</Nav.Link>
                        </li>
                    </ul>
                </Col>
                <Col className="footer-column" lg={4}>
                    <h5><strong>Newsletter</strong></h5>
                    <p>Wir halten Sie auf dem Laufenden rund um die Fachhochschule Technikum Wien.</p>
                    <Button className="newsletter-button" href="https://www.technikum-wien.at/newsletter/subscribe/">Jetzt abonnieren</Button>
                </Col>
            </Row>
        </Container>
        <SocialMediaBar></SocialMediaBar>
    </div>;
};

export default Footer;