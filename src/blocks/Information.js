import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { Container, Row, Col } from 'react-bootstrap';

const Information = () => {
	return (
		<div>
			<Container>
				<Row>
					<Col lg={6}>
						<h1>Unsere Studierenden</h1>
						<h3>Das können Sie von uns erwarten</h3>
						<ul>
							<li>
								komplexe informationstechnische Zusammenhänge zu
								analysieren
							</li>
							<li>
								die aktuellen Informationstechnologien
								erfolgreich anzuwenden
							</li>
							<li>
								diese im Kontext wirtschaftlicher und
								fachspezifischer rechtlicher Grundkenntnisse zu
								betrachten
							</li>
							<li>Softwaresysteme zu planen und zu entwickeln</li>
							<li>
								Projekte selbständig zu analysieren und
								umzusetzen
							</li>
							<li>
								Kundenanforderungen zu erheben und in Modelle zu
								überführen
							</li>
							<li>IT Prozesse Kunden verständlich darzulegen</li>
							<li>
								Computersicherheit bei der Arbeit im IT-Umfeld
								in Betracht zu ziehen
							</li>
							<li>
								grafische Benutzeroberflächen nach
								Gesichtspunkten der Usability zu entwickeln und
								zu evaluieren
							</li>
						</ul>
					</Col>
					<Col lg={6}>
						<ReactPlayer
							url='https://www.youtube.com/watch?v=UHtkg_b6tjs'
							width='100%'
							pip={false}
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Information;
