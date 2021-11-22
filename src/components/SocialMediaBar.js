import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import FacebookIcon from '../icons/FacebookIcon.js';
import TwitterIcon from '../icons/TwitterIcon.js';
import InstagramIcon from '../icons/Instagram.js';
import YoutubeIcon from '../icons/YoutubeIcon.js';
import WebIcon from '../icons/WebIcon.js';

const SocialMediaBar = () => {
	return <div>
        <Container>
            <Row className="sm-icons">
                <Col>
                    <FacebookIcon></FacebookIcon> 
                </Col>
                <Col>
                    <TwitterIcon></TwitterIcon> 
                </Col>
                <Col>
                    <InstagramIcon></InstagramIcon>
                </Col>
                <Col>
                    <YoutubeIcon></YoutubeIcon> 
                </Col>
                <Col>
                    <WebIcon></WebIcon>
                </Col >
            </Row>
        </Container>
    </div>;
};

export default SocialMediaBar;