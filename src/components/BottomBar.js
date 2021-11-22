import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const BottomBar = () => {
	return <div className="bottom-bar">
        <Container>
            <Row>
                <Col>
                    © 2020 Company Name. Made With Love By Us
                </Col>
            </Row>
        </Container>
    </div>;
};

export default BottomBar;