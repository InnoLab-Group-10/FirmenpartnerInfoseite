import React from 'react';
import {Form, Button} from 'react-bootstrap';

const ContactForm = () => {
	return <div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Control type="text" placeholder="Betreff" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="Ihre Nachricht"/>
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="primary" type="submit">
                        Absenden
                    </Button>                
                </div>
            </Form>
    </div>;
};

export default ContactForm;