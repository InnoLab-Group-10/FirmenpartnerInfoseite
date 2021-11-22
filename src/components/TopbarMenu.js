import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import SocialMediaBar from './SocialMediaBar';
import MailIcon from '../icons/MailIcon';

const TopbarMenu = () => {
	return <div className="nav-top-bar">
        <Container>
            <Row>
                <Col xs={5} className="top-bar-mail">
                    <MailIcon></MailIcon>
                    <a href="mailto:name@example.com">name@example.com</a>
                </Col>
                <Col>
                    <SocialMediaBar></SocialMediaBar>
                </Col>
            </Row>
        </Container>
    </div>;
};

export default TopbarMenu;