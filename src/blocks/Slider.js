import React from 'react';
import { Carousel } from 'react-bootstrap';

import slider1 from '../media/fh_technikum_wien_tag_gross.jpg';
import slider2 from '../media/fh_technikum_wien_nacht_gross.jpg';

const Slider = () => {
	return (
		<div id='slider'>
			<Carousel className='big-slider' fade>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={slider1}
						alt='First slide'
					/>
					<Carousel.Caption className='main-slide-text' hidden>
						<h3>First slide label</h3>
						<p>
							Nulla vitae elit libero, a pharetra augue mollis
							interdum.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={slider2}
						alt='Second slide'
					/>
					<Carousel.Caption className='main-slide-text' hidden>
						<h3>Second slide label</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Slider;
