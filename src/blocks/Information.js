import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

const Information = () => {
	return <div>
        <Container>
            <Row>
                <Col>
                    <h1>Überschrift</h1>
                    <h2>Unterüberschrift</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    </p>
                </Col>
                <Col>
                    <Image src="holder.js/100px250" fluid />
                </Col>
            </Row>
        </Container>
    </div>;
};

export default Information;