import React, { Component } from 'react';
import Footer from '../global/Footer';
import './services.css';

class Freelancers extends Component {
	render() {
		return (
			<div>
				<section className="large-pad-top">
	        <div className="container">
	          <h1><strong>Freelancer Consulting</strong></h1>
	            <h2><strong>Are you tired of working long hours, half of which aren't even billable? Do you want to make more money freelancing and spend less time working for free?</strong></h2>
	            <p>Whether you know it or not, there's a mix of problems going on if you answered yes to the above questions. Usually, the problems involve bad positioning, not charging enough, not setting proper expectations, and not leveraging technology enough.</p>
	            <p>I've spent years freelancing. And like you, I've struggled through many of these problems. But ever since I figured out how to solve them, I can't wait to empower other freelancers do the same.</p>
	            <p>My Freelancer Roadmap is a product reserved only for freelancers. First, we'll schedule a call. I'll send you some questions to answer before the call. Then, give me 2 hours, and I'll help you establish a clear path forward to solving these problems. The fee for this is $199. To apply, simply send me an email at <a href="mailto:jc@builtbygood.co">jc@builtbygood.co</a></p>
	        </div>
	      </section>
				<Footer />
			</div>
		)
	}
}

export default Freelancers;