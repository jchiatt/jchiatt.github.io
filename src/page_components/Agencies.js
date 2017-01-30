import React, { Component } from 'react';
import Footer from '../global/Footer';
import './services.css';

class Agencies extends Component {
	render() {
		return (
			<div>
				<section className="large-pad-top">
	        <div className="container">
	          <h1><strong>Creative Agency Consulting</strong></h1>
	            <h2><strong>Do you feel your agency could be doing more with digital?</strong></h2>
	            <p>Whether you're looking to take your development team to the next level or simply to free up more time to spend on billable work, many agencies are still struggling to truly harness the power of software in their business.</p>
	            <p>Over the past 5 years, I've worked with many creative agencies to oversee websites and specialized applications for their clients, optimize their development workflow, and provide training for their development teams.</p>
	            <p>I can help your agency, too. To make the best recommendations, I need to get a better understanding of how your agency operates. We do this with an Agency Tech Audit. This is a 2-3 day on-site event where I learn more about your agency and its workflow and identify workflow problems and valuable opportunities with your clients for you to take advantage of. The fee for this is $4,999 plus travel expenses. To apply, simply send me an email at <a href="mailto:jc@builtbygood.co">jc@builtbygood.co</a></p>
	        </div>
	      </section>
				<Footer />
			</div>
		)
	}
}

export default Agencies;