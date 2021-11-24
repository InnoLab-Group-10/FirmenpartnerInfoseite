import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import BottomBar from '../components/BottomBar.js';
import SocialMediaBar from '../components/SocialMediaBar.js';
import Image from 'react-bootstrap/Image';

const Footer = () => {
	return <div className="footer">
        <Container>
            <Row>
                <Col>
                    <Image src="holder.js/240x100" fluid />
                </Col>
                <Col>
                    <h5><strong>Links</strong></h5>
                    <ul>
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                        <li>Link 4</li>
                    </ul>
                </Col>
                <Col>
                    <h5><strong>Newsletter</strong></h5>
                    <p>Hier Newslettertext einfügen</p>
                    <Button>Jetzt abonnieren</Button>
                </Col>
            </Row>
        </Container>
        <SocialMediaBar></SocialMediaBar>
    </div>;
};

export default Footer;