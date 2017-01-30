import React, { Component } from 'react';
import avatar from './jc.jpg';
import Footer from '../global/Footer';

class About extends Component {
	render() {
		return (
			<div>
				<div className="page-hero">
	        <div className="container">
	          <img src={avatar} />
	        </div>
	      </div>
	      <section className="page-content">
	        <div className="container">
	          <section className="page-section">
	            <h1><strong>About Me.</strong></h1>
	            <p>J.C. Hiatt is an entrepreneur, developer, digital enthusiast, freelance coach, writer, [un]professional fitness trainer and drummer. When he's not working, one can find him in the gym or with his wife (she's a babe).</p>
	          </section>

	          <section className="page-section">
	            <h2><strong>Current Interests.</strong></h2>
	            <p><strong>Education:</strong> Improving the coding ecosystem in Mississippi.</p>
	            <p><strong>Speaking:</strong> Helping companies better understand what developers want in a job.</p>
	          </section>

	          <section className="page-section">
	            <h2><strong>The Nitty Gritty.</strong></h2>
	            <p><strong>Faith:</strong> Christian (Reformed)</p>
	            <p><strong>Development:</strong> WordPress, Ruby on Rails</p>
	            <p><strong>Learning:</strong> ReactJS, Redux, React Native, Ruby on Rails, WP REST API</p>
	            <p><strong>Diet:</strong> Cylical Ketogenic or Slow-Carb</p>
	            <p><strong>Music:</strong> Post-Hardcore</p>
	            <p><strong>Fun Fact:</strong> Adores good product packaging.</p>
	          </section>
	        </div>
	      </section>
				<Footer />
			</div>
		)
	}
}

export default About;