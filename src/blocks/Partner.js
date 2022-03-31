import React from 'react';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

// TODO maybe better solution
function importAll(r) {
	return r.keys().map(r);
}

const images = importAll(
	require.context('../media/partner/', false, /\.(png|jpe?g|svg)$/)
);

const Partner = () => {
	images.sort(() => Math.random() - 0.5);

	return (
		<div>
			<Container>
				<Row>
					<Col>
						<h1>Unsere Partner</h1>
						<h3>Auswahl unserer Kooperationspartner</h3>
						<p>
							Werden Sie Firmenpartner der FH Technikum Wien und
							präsentieren Sie sich bei unseren Studierenden und
							AbsolventInnen als attraktives Unternehmen.
						</p>
					</Col>
				</Row>
				<Row>
					<Col xs={6} lg={3} sm={6}>
						<Nav.Link href='#' target='_blank'>
							<Image src={images[0].default} fluid />
						</Nav.Link>
					</Col>
					<Col xs={6} lg={3} sm={6}>
						<Nav.Link href='#' target='_blank'>
							<Image src={images[1].default} fluid />
						</Nav.Link>
					</Col>
					<Col xs={6} lg={3} sm={6}>
						<Nav.Link href='#' target='_blank'>
							<Image src={images[2].default} fluid />
						</Nav.Link>
					</Col>
					<Col xs={6} lg={3} sm={6}>
						<Nav.Link href='#' target='_blank'>
							<Image src={images[3].default} fluid />
						</Nav.Link>
					</Col>
				</Row>
				<Row>
					<Col xs={6} lg sm={3}>
						<Nav.Link href='#' target='_blank'>
							<Image src={images[4].default} fluid />
						</Nav.Link>
					</Col>
					<Col xs={6} lg sm={3}>
						<Nav.Link href='#' target='_blank'>
							<Image src={images[5].default} fluid />
						</Nav.Link>
					</Col>
					<Col xs={6} lg sm={3}>
						<Nav.Link href='#' target='_blank'>
							<Image src={images[6].default} fluid />
						</Nav.Link>
					</Col>
					<Col xs={6} lg sm={3}>
						<Nav.Link href='#' target='_blank'>
							<Image src={images[7].default} fluid />
						</Nav.Link>
					</Col>
					<Col xs={6} lg sm={3}>
						<Nav.Link href='#' target='_blank'>
							<Image src={images[8].default} fluid />
						</Nav.Link>
					</Col>
					<Col xs={6} lg sm={3}>
						<Nav.Link href='#' target='_blank'>
							<Image src={images[9].default} fluid />
						</Nav.Link>
					</Col>
					<Col xs={6} lg sm={3}>
						<Nav.Link href='#' target='_blank'>
							<Image src={images[10].default} fluid />
						</Nav.Link>
					</Col>
					<Col xs={6} lg sm={3}>
						<Nav.Link href='#' target='_blank'>
							<Image src={images[11].default} fluid />
						</Nav.Link>
					</Col>
				</Row>
				<Row>
					<Col xs={6} lg sm={3}>
						<Nav.Link href='#' target='_blank'>
							<Image src={images[12].default} fluid />
						</Nav.Link>
					</Col>
					<Col xs={6} lg sm={3}>
						<Nav.Link href='#' target='_blank'>
							<Image src={images[13].default} fluid />
						</Nav.Link>
					</Col>
					<Col xs={6} lg sm={3}>
						<Nav.Link href='#' target='_blank'>
							<Image src={images[14].default} fluid />
						</Nav.Link>
					</Col>
					<Col xs={6} lg sm={3}>
						<Nav.Link href='#' target='_blank'>
							<Image src={images[15].default} fluid />
						</Nav.Link>
					</Col>
					<Col xs={6} lg sm={3}>
						<Nav.Link href='#' target='_blank'>
							<Image src={images[16].default} fluid />
						</Nav.Link>
					</Col>
					<Col xs={6} lg sm={3}>
						<Nav.Link href='#' target='_blank'>
							<Image src={images[17].default} fluid />
						</Nav.Link>
					</Col>
					<Col xs={6} lg sm={3}>
						<Nav.Link href='#' target='_blank'>
							<Image src={images[18].default} fluid />
						</Nav.Link>
					</Col>
					<Col xs={6} lg sm={3}>
						<Nav.Link href='#' target='_blank'>
							<Image src={images[19].default} fluid />
						</Nav.Link>
					</Col>
				</Row>
				<Row>
					<Button
						className='partner-button'
						variant='secondary'
						size='lg'
						href='https://www.technikum-wien.at/unternehmenspartner-ihre-kooperationsmoeglichkeiten-im-ueberblick/'
						target='_blank'
					>
						Mehr Partner
					</Button>
				</Row>
			</Container>
		</div>
	);
};

export default Partner;
