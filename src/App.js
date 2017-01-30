import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';
import Home from './page_components/Home';
import About from './page_components/About';
import Startups from './page_components/Startups';
import Agencies from './page_components/Agencies';
import Freelancers from './page_components/Freelancers';
import Writings from './page_components/Writings';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="wrap" className="u-flex-center">
            <Match exactly pattern='/' component={Home}/>
            <Match pattern='/about' component={About}/>
            <Match pattern='/writings' component={Writings}/>
            <Match pattern='/startup-consulting' component={Startups}/>
            <Match pattern='/creative-agency-consulting' component={Agencies}/>
            <Match pattern='/freelancer-consulting' component={Freelancers}/>
        </div>
      </Router>
    );
  }
}

export default App;
