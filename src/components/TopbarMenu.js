import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import SocialMediaBar from './SocialMediaBar';
import MailIcon from '../icons/MailIcon';

const TopbarMenu = () => {
	return <div className="nav-top-bar">
        <Container>
            <Row>
                <Col sm={5} className="top-bar-mail">
                    <MailIcon></MailIcon>
                    <a href="mailto:helmut.gollner@technikum-wien.at">helmut.gollner@technikum-wien.at</a>
                </Col>
                <Col sm>
                    <SocialMediaBar></SocialMediaBar>
                </Col>
            </Row>
        </Container>
    </div>;
};

export default TopbarMenu;