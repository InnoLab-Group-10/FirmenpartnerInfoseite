import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const Partner = () => {
	return <div>
        <Container>
            <Row>
                <Col>
                    <h1>Unsere Partner</h1>
                    <h3>Auswahl unserer Kooperationspartner</h3>
                    <p>
                        Werden Sie Firmenpartner der FH Technikum Wien und präsentieren Sie sich bei unseren Studierenden und AbsolventInnen als attraktives Unternehmen.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src="holder.js/150x150" fluid />
                </Col>
                <Col>
                    <Image src="holder.js/150x150" fluid />
                </Col>
                <Col>
                    <Image src="holder.js/150x150" fluid />
                </Col>
                <Col>
                    <Image src="holder.js/150x150" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src="holder.js/60x60" fluid />
                </Col>
                <Col>
                    <Image src="holder.js/60x60" fluid />
                </Col>
                <Col>
                    <Image src="holder.js/60x60" fluid />
                </Col>
                <Col>
                    <Image src="holder.js/60x60" fluid />
                </Col>
                <Col>
                    <Image src="holder.js/60x60" fluid />
                </Col>
                <Col>
                    <Image src="holder.js/60x60" fluid />
                </Col>
                <Col>
                    <Image src="holder.js/60x60" fluid />
                </Col>
                <Col>
                    <Image src="holder.js/60x60" fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src="holder.js/60x60" fluid />
                </Col>
                <Col>
                    <Image src="holder.js/60x60" fluid />
                </Col>
                <Col>
                    <Image src="holder.js/60x60" fluid />
                </Col>
                <Col>
                    <Image src="holder.js/60x60" fluid />
                </Col>
                <Col>
                    <Image src="holder.js/60x60" fluid />
                </Col>
                <Col>
                    <Image src="holder.js/60x60" fluid />
                </Col>
                <Col>
                    <Image src="holder.js/60x60" fluid />
                </Col>
                <Col>
                    <Image src="holder.js/60x60" fluid />
                </Col>
            </Row>
            <Row>
                <Button className="partner-button" variant="secondary" size="lg" href="https://www.technikum-wien.at/unternehmenspartner-ihre-kooperationsmoeglichkeiten-im-ueberblick/" target="_blank">Mehr Infos</Button>
            </Row>
        </Container>

    </div>;
};

export default Partner;