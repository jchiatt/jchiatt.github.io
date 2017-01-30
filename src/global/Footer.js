import React, { Component } from 'react';
import { Link } from 'react-router';

class Footer extends Component {
	render() {
		return (
			<footer>
				<div className="container clearfix">
					<Link to='/' className="link">Home.</Link>
					<Link to='/about' className="link">About.</Link>
					<Link to='/writings' className="link">Writings.</Link>
				</div>
			</footer>
		)
	}
}

/********************
TODO:
1. Add contact link
2. Integrate newsletter signup with MailChimp or Drip

********************/

export default Footer;