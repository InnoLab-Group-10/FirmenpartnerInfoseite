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
                    <Container className="contact-information">
                        <Row>
                            <Col md={2}>
                                <LocationIcon/> 
                            </Col>
                            <Col>
                                <h4>Straße 00, 0000 Ort</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={2}>
                                <PhoneIcon/>
                            </Col>
                            <Col>
                                <h4>+43 (0) 000 000 00 00</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col  md={2}>
                                <MailIcon/>
                            </Col>
                            <Col>
                                <h4>name@example.com</h4>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    </div>;
};

export default Contact;