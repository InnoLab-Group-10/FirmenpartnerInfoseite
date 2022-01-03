import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

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
                    <Button variant="link" href="https://www.facebook.com/fhtechnikumwien" target="_blank">
                        <FacebookIcon></FacebookIcon>
                    </Button> 
                </Col>
                <Col>
                    <Button variant="link" href="https://twitter.com/fhtechnikumwien" target="_blank">
                        <TwitterIcon></TwitterIcon>
                    </Button>
                </Col>
                <Col>
                    <Button variant="link" href="https://www.instagram.com/technikum_wien/" target="_blank">
                        <InstagramIcon></InstagramIcon>
                    </Button>
                </Col>
                <Col>
                    <Button variant="link" href="https://www.youtube.com/user/FHTechnikumWien" target="_blank">
                        <YoutubeIcon></YoutubeIcon>
                    </Button>
                </Col>
                <Col>
                    <Button variant="link" href="https://www.technikum-wien.at/duales-studium-bachelor-studiengang-informatik/" target="_blank">
                        <WebIcon></WebIcon>
                    </Button>
                </Col>
            </Row>
        </Container>
    </div>;
};

export default SocialMediaBar;