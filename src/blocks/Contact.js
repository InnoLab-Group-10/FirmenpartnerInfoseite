import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ContactForm from '../components/ContactForm';

import LocationIcon from '../icons/LocationIcon';
import PhoneIcon from '../icons/PhoneIcon';
import MailIcon from '../icons/MailIcon';

const Contact = () => {
	return <div>
        <Container>
            <Row>
                <Col>
                    <h1>Get in Touch</h1>
                    <ContactForm></ContactForm>
                </Col>
                <Col>
                    <h1>Our Location</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered .</p>
                    <Container>
                        <Row>
                            <Col>
                                <LocationIcon></LocationIcon> 
                            </Col>
                            <Col>Straße 00, 0000 Ort</Col>
                        </Row>
                        <Row>
                            <Col>
                                <PhoneIcon></PhoneIcon>
                            </Col>
                            <Col>+43 (0) 000 000 00 00</Col>
                        </Row>
                        <Row>
                            <Col>
                                <MailIcon></MailIcon>
                            </Col>
                            <Col>name@example.com</Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    </div>;
};

export default Contact;