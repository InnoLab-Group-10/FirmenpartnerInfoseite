import React from 'react';
import {Accordion, Card} from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';


function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <button
        type="button"
        style={{ backgroundColor: 'pink' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }


const DualInfoAccordion = () => {
	return (
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <CustomToggle eventKey="0">Click me!</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Infos über die Berufspraxisphase</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <CustomToggle eventKey="1">Click me!</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>WAs kann man von einem FHStudenten erwarten</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      );
};

export default DualInfoAccordion;