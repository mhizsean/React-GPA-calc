import React, { Component } from 'react';
import { Consumer } from '../Context';

class Gp extends Component {

	render() {
		return (
			<Consumer>
	
				{(value) => {
	
					const { gpa } = value;
	
					return (
					   <div>
							<h4 style={{marginTop: '-80px'}} className="display-2 display-gp" >{gpa}</h4>
					   </div>
					);
				
				}}

			</Consumer>
		);
	}
}



export default Gp;
