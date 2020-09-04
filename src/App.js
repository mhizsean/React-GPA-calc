import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './layout/NavBar';
import { Provider } from './Context';

import Calculate from './components/Calculate';
import AddResult from './components/Grade';
import Gp from './components/Gp';
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
							<Route exact path="/calculate" component={Calculate} />
							<Route exact path="/calculate/gp" component={Gp} />
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
