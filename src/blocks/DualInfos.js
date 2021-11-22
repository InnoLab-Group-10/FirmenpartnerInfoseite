import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import DualInfoAccordion from '../components/DualInfoAccordion.js';

const DualInfos = () => {
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
            </Row>
            <Row>
                <Col>
                    <DualInfoAccordion></DualInfoAccordion>
                </Col>
            </Row>
        </Container>
    </div>;
};

export default DualInfos;