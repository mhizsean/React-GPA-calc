import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Home extends Component {
	showForm = () => {
		this.props.history.push('/addresults');
	};

	render() {
		return (
			<div>
				<div className="main-home">
				<p>Ever wwanted to know where you stand before the semester is over? <br/> try out this calculator i built to help calulate GPA</p>

                <Link to="/addresults"><button onClick={this.showForm}>Calculate GP</button></Link>
            </div>
			</div>
		);
	}
}





