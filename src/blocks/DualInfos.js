import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DualInfoAccordion from '../components/DualInfoAccordion.js';

const DualInfos = () => {
	return (
		<div>
			<Container>
				<Row>
					<Col>
						<h1>Das duale Studium</h1>
						<h3>
							Die erste Informatik Grundausbildung in Österreich,
							die als dualer Studiengang ageboten wird
						</h3>
					</Col>
				</Row>
				<Row>
					<Col>
						<DualInfoAccordion></DualInfoAccordion>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default DualInfos;
