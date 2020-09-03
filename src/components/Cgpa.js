import React, { Component } from 'react';
import { Consumer } from '../Context';

class Cgpa extends Component {

	render() {
		return (
			<Consumer>
				{(value) => {
					const { cgpa } = value;
					return (
					   <div style={styles} className="row justify-content-center align-items-center mx-auto">
                             <div className="col-10 mx-auto text-center">
							  <h1 style={{marginTop:'-120px'}}>Your CGPA is:</h1>
							  <h2 className="display-2">{cgpa}</h2>
							 </div>
					   </div>
					);
				}}
			</Consumer>
		);
	}
}

const styles = {
	height:'calc(100vh - 55px)',
	background:'#ccc',
	width:'100%'
}


export default Cgpa;
