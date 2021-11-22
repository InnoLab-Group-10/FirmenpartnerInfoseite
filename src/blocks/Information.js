import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

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
                    <Button>Irgendwas</Button>
                </Col>
            </Row>
        </Container>
    </div>;
};

export default Information;