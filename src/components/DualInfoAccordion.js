import React from 'react';
import {Accordion, Card, Col, Button, ProgressBar, Row} from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import {MdKeyboardArrowDown} from 'react-icons/md'

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <Button
        className="btn btn-light"
        type="button"
        onClick={decoratedOnClick}
      >
        {children}
      </Button>
    );
  }


const DualInfoAccordion = () => {
	return (
        <Accordion className="accordion-menu" defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Col>
                <h4>Das duale Studium</h4>
              </Col>
              <CustomToggle className="accordion-button" eventKey="0">
                <MdKeyboardArrowDown/>
              </CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul className="dual-infos">
                  <li>
                    40 Plätze pro Studienjahr
                  </li>
                  <li>
                    6 Semester, Studienbegin im herbst
                  </li>
                  <li>
                    Im ersten Studienjahr herrscht keine Trennung zur "Tagesform"
                  </li>
                  <li>
                    Ab dem dritten Semester wechseln Unterricht und Berufspraxisphasen ab
                  </li>
                  <li>
                    Eine Zusage eines Partnerunternehmens ist ab dem dritten Semester notwendig
                  </li>
                </ul>
                <Row>
                  <Col xs={2}>
                      <strong>
                        Semester
                      </strong>
                  </Col>
                  <Col>
                    <strong>
                      Berufspraxisphasen / FH-Phase
                    </strong>
                  </Col>
                  <Col xs={2}>
                    <strong>
                      Wochen
                    </strong>
                  </Col>
                </Row>
                <Row></Row>
                <Row>
                  <Col xs={2}>
                    <p>
                      WS 3. Sem.
                    </p>
                  </Col>
                  <Col>
                    <ProgressBar>
                      <ProgressBar variant="warning" now={40} key={1} />
                      <ProgressBar variant="success" now={40} key={2} />
                    </ProgressBar>
                  </Col>
                  <Col xs={2}>
                    <p>
                      12 / 12
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={2}>
                    <p>
                      SS 4. Sem.
                    </p>
                  </Col>
                  <Col>
                    <ProgressBar>
                      <ProgressBar variant="warning" now={40} key={1} />
                      <ProgressBar variant="success" now={40} key={2} />
                    </ProgressBar>
                  </Col>
                  <Col xs={2}>
                    <p>
                      12 / 15
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={2}>
                    <p>
                      WS 5. Sem.
                    </p>
                  </Col>
                  <Col>
                    <ProgressBar>
                      <ProgressBar variant="warning" now={40} key={1} />
                      <ProgressBar variant="success" now={60} key={2} />
                    </ProgressBar>
                  </Col>
                  <Col xs={2}>
                    <p>
                      12 / 9
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={2}>
                    <p>
                      SS 6. Sem.
                    </p>
                  </Col>
                  <Col>
                    <ProgressBar>
                      <ProgressBar variant="warning" now={40} key={1} />
                      <ProgressBar variant="success" now={30} key={2} />
                    </ProgressBar>
                  </Col>
                  <Col xs={2}>
                    <p>
                      12 / 12
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Col>
                <h4>Bewerbungsprozess bei den Partnerunternehmen</h4>
              </Col>
              <CustomToggle className="accordion-button" eventKey="1">
                <MdKeyboardArrowDown/>
              </CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ul className="dual-infos">
                  <li>
                    Studierende bewerben sich im Laufe des 2. Semesters bei den Partnerunternehmen
                  </li>
                  <li>
                    Für den Quereinstieg in das 3. Semester für AbsolventInnen von facheinschlägigen HTL-Ausbildungseinrichtungen ist danaben eine Bewerbung bzw. Zusage eines Partnerunternehmens notwendig
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Col>
                <h4>Partnerunternehmen</h4>
              </Col>
              <CustomToggle className="accordion-button" eventKey="2">
                <MdKeyboardArrowDown/>
              </CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <ul className="dual-infos">
                  <li>
                    Zwischen dem Unternehmen und der FH Technikum Wien wird eine Kooperationsvereinbarung über das duale Studium geschlossen
                  </li>
                  <li>
                    Einzelne Lehrveranstaltungen sind über die Betriebspraxisphase in das Unternehmen ausgegliedert
                  </li>
                  <li>
                    Anstellung der Studierenden ab dem 3. Semester über zwei Studienjahre
                  </li>
                  <li>
                    Insgesamt mind. 12 Monate Betriebspraxis im Unternehmen
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      );
};

export default DualInfoAccordion;