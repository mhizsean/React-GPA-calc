import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './layout/NavBar';
import { Provider } from './Context';
import Results from './components/Results';
import AddResult from './components/Grade';
import Gp from './components/Gp';
// import Spinner from './layout/Spinner';
import Cgpa from './components/Cgpa';
// import SemesterDetails from './components/SemesterDetails';
import Home from './components/Home';

class App extends Component {
	render() {
		return (
			<Provider>
				<Router>
					<div className="App">
						<NavBar />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/addresults" component={AddResult} />
							<Route exact path="/results" component={Results} />
							<Route exact path="/results/gp" component={Gp} />
							<Route exact path="/results/cgpa" component={Cgpa} />
							{/* <Route exact path="/results/semesterDetails" component={SemesterDetails} />
							<Route exact path="/spinner" component={Spinner} /> */}
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
