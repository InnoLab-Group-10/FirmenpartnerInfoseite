import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

const Testimonials = () => {
	return <div>
        <Container>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src="holder.js/200x200"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Testimonial 1</h3>
                    <h4>Firmenname</h4>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src="holder.js/200x200"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Testimonial 1</h3>
                    <h4>Firmenname</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src="holder.js/200x200"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Testimonial 1</h3>
                    <h4>Firmenname</h4>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    </div>;
};

export default Testimonials;