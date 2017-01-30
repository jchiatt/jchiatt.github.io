import React, { Component } from 'react';
import Footer from '../global/Footer';
import './services.css';

class Startups extends Component {
	render() {
		return (
			<div>
				<section className="large-pad-top">
	        <div className="container">
	          <h1><strong>Startup Consulting</strong></h1>
	            <h2><strong>Have a startup idea but not sure how to move forward?</strong></h2>
	            <p>You're not alone. Getting from the idea phase to actually having a product that makes you money is no easy task.</p>
	            <p>Over the past 5 years, I've advised numerous startups in order to help their idea to market. I've often played a "CTO for hire" role and helped ideas become software products.</p>
	            <p>Do you have an idea? Are you ready to take the next step forward but aren't sure what that step is?</p>
	            <p>If you answered yes, then you need to book a Roadmapping session with me. This is a 1 day event where we dive deep into your idea, identify the value you can bring to the market, and develop an actionable path forward. The fee for this is $1,499. To apply, simply send me an email at <a href="mailto:jc@builtbygood.co">jc@builtbygood.co</a></p>
	        </div>
	      </section>
				<Footer />
			</div>
		)
	}
}

export default Startups;