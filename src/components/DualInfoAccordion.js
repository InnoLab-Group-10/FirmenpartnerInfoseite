import React from 'react';
import {Accordion, Card, Col, Button} from 'react-bootstrap';
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
                <h4>Thema 1</h4>
              </Col>
              <CustomToggle className="accordion-buttom" eventKey="0">
                <MdKeyboardArrowDown/>
              </CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Infos über die Berufspraxisphase</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Col>
                <h4>Thema 2</h4>
              </Col>
              <CustomToggle className="accordion-buttom" eventKey="1">
                <MdKeyboardArrowDown/>
              </CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>WAs kann man von einem FHStudenten erwarten</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      );
};

export default DualInfoAccordion;