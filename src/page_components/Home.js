import React, { Component } from 'react';
import { Link } from 'react-router';
import Footer from '../global/Footer';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<section>
					<div className="container">
						<h1><Link to="/about" className="link">J.C. Hiatt</Link> | Software Consulting</h1>
						<hr />
							<p>I help <Link to="/startup-consulting" className="link">Startups</Link>, <Link to="/creative-agency-consulting" className="link">Creative Agencies</Link>, and <Link to="freelancer-consulting" className="link">Freelancers</Link> harness the digital space to generate more revenue and cut expenses.</p>
					</div>
				</section>
				<Footer />
			</div>
		)
	}
}

export default Home;