import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
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
                    Newsletterbutton und Links zum Technikum
                </Col>
            </Row>
        </Container>
        <SocialMediaBar></SocialMediaBar>
        <BottomBar></BottomBar>
    </div>;
};

export default Footer;