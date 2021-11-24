import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
	return <div id="slider">
        <Carousel className="big-slider" fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/1920x1080?bg=373940"
                alt="First slide"
                />
                <Carousel.Caption className="main-slide-text">
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/1920x1080?bg=282c34"
                alt="Second slide"
                />

                <Carousel.Caption className="main-slide-text">
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/1920x1080?bg=20232a"
                alt="Third slide"
                />

                <Carousel.Caption className="main-slide-text">
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>;
};

export default Slider;