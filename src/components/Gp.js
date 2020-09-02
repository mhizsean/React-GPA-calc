import React, { Component } from 'react';
import { Consumer } from '../Context';

class Gp extends Component {
	render() {
		return (
			<Consumer>
				{(value) => {
					const { gpa } = value;
					return (
					   <div className="row justify-content-center align-items-center mx-auto">
                             <div className="col-10 mx-auto text-center">
							  <h1 style={{marginTop:'-120px'}}>Your GPA is:</h1>
							  <h2 className="display-2">{gpa}</h2>
							 </div>
					   </div>
					);
				}}
			</Consumer>
		);
	}
}


export default Gp;
