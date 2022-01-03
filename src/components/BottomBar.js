import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const BottomBar = () => {
	return <div className="bottom-bar">
        <Container>
            <Row>
                <Col>
                    © 2022 FH-Technikum Wien. Made with Love by Gruppe 10
                </Col>
            </Row>
        </Container>
    </div>;
};

export default BottomBar;