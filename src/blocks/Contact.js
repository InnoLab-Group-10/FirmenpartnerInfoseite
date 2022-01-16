import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ContactForm from '../components/ContactForm';

import LocationIcon from '../icons/LocationIcon';
import PhoneIcon from '../icons/PhoneIcon';
import MailIcon from '../icons/MailIcon';

const Contact = () => {
	return <div>
        <Container className="contact-box">
            <Row>
                <Col lg>
                    <h1>Was können wir für Sie tun?</h1>
                    <ContactForm></ContactForm>
                </Col>
                <Col>
                    <h1>Besuchen Sie uns mal</h1>
                    <p>Öffnungszeiten: Mo-Fr 7:30 - 19:30 Uhr, Sa 7:30-13:00 Uhr<br/>Bei Interesse an einer Kooperation nutzen Sie das Kontaktformular oder wenden sich direkt an den Firmenkoordinator.</p>
                    <Container className="contact-information">
                        <Row className="justify-content-md-center">
                            <Col xs={2}>
                                <LocationIcon/> 
                            </Col>
                            <Col xs={6}>
                                <h4>FH-Prof. DI Helmut Gollner</h4>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs={2}>
                                <PhoneIcon/>
                            </Col>
                            <Col xs={6}>
                                <h4>+43 (0) 1 333 40 77-2524</h4>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs={2}>
                                <MailIcon/>
                            </Col>
                            <Col xs={6}>
                                <h4>helmut.gollner@technikum-wien.at</h4>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    </div>;
};

export default Contact;