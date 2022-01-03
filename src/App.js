import React from 'react';
import 'react-holder';

import TopbarMenu from './components/TopbarMenu.js';
import NavbarMenu from './components/NavbarMenu.js';
import Slider from './blocks/Slider.js';
import Information from './blocks/Information.js';
import DualInfos from './blocks/DualInfos.js';
import Testimonials from './blocks/Testimonials.js';
import Partner from './blocks/Partner.js';
import Contact from './blocks/Contact.js';
import Footer from './blocks/Footer.js';
import BottomBar from './components/BottomBar.js';

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-160px";
  }
  prevScrollpos = currentScrollPos;
}

const App = () => {
	return <div id="bootstrap-override">
		<header id="header">
			<TopbarMenu/>
			<NavbarMenu/>
		</header>
		<Slider/>
		<section id="dual">
			<DualInfos/>
		</section>
		<section id="info">
			<Information/>
		</section>
		<section id="partner">
			<Partner/>
		</section>
		<section id="testimonials">
			<Testimonials/>
		</section>
		<section id="contact">
			<Contact/>
		</section>
		<Footer/>
		<BottomBar></BottomBar>
	</div>;
};

export default App;
