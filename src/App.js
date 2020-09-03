import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './layout/NavBar';
import { Provider } from './Context';

import Results from './components/Results';
import AddResult from './components/Grade';
import Gp from './components/Gp';
import Cgpa from './components/Cgpa';
import About from './components/About';


class App extends Component {
	render() {
		return (
			<Provider>
				<Router>
					<div className="App">
						<NavBar />
						<Switch>
							<Route exact path="/" component={AddResult} />
							<Route exact path="/about" component={About} />
							<Route exact path="/results" component={Results} />
							<Route exact path="/results/gp" component={Gp} />
							<Route exact path="/results/cgpa" component={Cgpa} />
							
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
