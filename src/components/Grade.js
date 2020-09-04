import React, { Component } from 'react';
import { Consumer } from '../Context';
import uuid from 'uuid';

class AddResult extends Component {
	state = {
		course: '',
		grade: '',
		credit: '',
		error: false
	};

	onSubmit = (dispatch, e) => {
		e.preventDefault();
		// e.target.reset();
		const { course, grade, credit, error } = this.state;
		//iffields are empty
		if (course === '' || grade === '' || credit === '') {
			this.setState({
				error: !error,
				
			});
			console.log(error)
		
		} else {
			if (grade === 'A') {
				const gradeVal = 5 * parseInt(credit);
				const newResult = {
					id: uuid(),
					course,
					grade,
					credit,
					gradeVal
				};
				dispatch({ type: 'ADD_RESULT', payload: newResult });
				this.props.history.push('/calculate');
			} else if (grade === 'B') {
				const gradeVal = 4 * parseInt(credit);
				const newResult = {
					id: uuid(),
					course,
					grade,
					credit,
					gradeVal
				};
				dispatch({ type: 'ADD_RESULT', payload: newResult });
				this.props.history.push('/calculate');
			} else if (grade === 'C') {
				const gradeVal = 3 * parseInt(credit);
				const newResult = {
					id: uuid(),
					course,
					grade,
					credit,
					gradeVal
				};
				dispatch({ type: 'ADD_RESULT', payload: newResult });
				this.props.history.push('/calculate');
			} else if (grade === 'D') {
				const gradeVal = 2 * parseInt(credit);
				const newResult = {
					id: uuid(),
					course,
					grade,
					credit,
					gradeVal
				};
				dispatch({ type: 'ADD_RESULT', payload: newResult });
				this.props.history.push('/calculate');
			} else if (grade === 'F') {
				const gradeVal = 0 * parseInt(credit);
				const newResult = {
					id: uuid(),
					course,
					grade,
					credit,
					gradeVal
				}; 
				dispatch({ type: 'ADD_RESULT', payload: newResult });
				this.props.history.push('/calculate');
			} else {
				this.setState({
					error: !error
				});

				setTimeout(() => {
					this.setState({
						error: false
					});
					console.log(error)
				}, 3000);
			}
		}
	};
	

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value.trim().toUpperCase()
		});
	};
	render() {
		const { course, grade, credit, error } = this.state;
		return (
			<Consumer>
				{(value) => {
					const { dispatch, results, cumulativeData } = value;
					return (
						<div className="main-calculator">

                         	<div className="container">						 								
						    
						 		<div className="card">
								
									<div className="error-message">
                                        {error ? (
                                            <div className="alert alert-danger">
                                                <p>Please fill all fields correctly!</p>
                                            </div>
                                        ) : null}
                                    </div>
									
									<form onSubmit={this.onSubmit.bind(this, dispatch)} >
										<div className="gpa-form">
											<div className="course-main input">
												<label htmlFor="">Course: </label>
												<input 
													type="text"
													name="course"
													value={course}
													onChange={this.onChange}
													placeholder="e.g. CSC309"
												/>  
											</div>

											
											<div className="grade-main input">
												<label htmlFor="">Grade:</label>
												
												<input type="text"
													name="grade"
													value={grade}
													onChange={this.onChange}
													placeholder="e.g A, B, C"
												/>
	
											</div>

											<div className="credit-main input">
												<label htmlFor="">Credit:</label>
												<input type="number"
													name="credit"
													value={credit}
													onChange={this.onChange}
													placeholder="e.g 3"
												/>
											</div>
										</div>
									
																				
										<div className="btn">
											
											<div className="calculate-btn">
											<button  type="submit">Calculate</button>

											</div>
										</div>
										
									</form>							
							</div>								
						 </div>
					
						
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default AddResult;
