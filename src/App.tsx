import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


import TestForm from './form/Form';

const Home = () => (
	<div>
		HELLO THERE!!!
	</div>
);

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<nav>
						<ul>
							<li><Link to='/'>Home</Link></li>
							<li><Link to='/form'>Form</Link></li>
						</ul>
					</nav>
					<main>
						<Route path="/" exact component={Home} />
						<Route path="/form" exact component={TestForm} />
					</main>
				</div>
			</Router>
		);
	}
}

export default App;