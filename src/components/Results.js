import React, { Component } from 'react';
import Result from './Result';
import { Consumer } from '../Context';
import { Link } from 'react-router-dom';
import Gp from './Gp';



class Results extends Component {

	CalcGp = (results, dispatch) => {
		const totalcredits = results.map((result) => parseInt(result.credit)).reduce((prev, next) => prev + next);
		const totalGradeVal = results.map((result) => result.gradeVal).reduce((prev, next) => prev + next);
		let gpa = (totalGradeVal / totalcredits).toFixed(2);
		dispatch({ type: 'GPA', payload: gpa });
		// this.props.history.push('/spinner');
		setTimeout(() => {
			this.props.history.push(<Gp/>);
		}, 2000);
	};

	AddNewResult = (results, dispatch) => {
		const totalcredits = results.map((result) => parseInt(result.credit)).reduce((prev, next) => prev + next);
		const totalGradeVal = results.map((result) => result.gradeVal).reduce((prev, next) => prev + next);
		const cumulative_data = {
			totalcredits: totalcredits,
			totalGradeVal: totalGradeVal
		}
        console.log(cumulative_data);
		dispatch({type: 'CUMULATIVE_DATA', payload: cumulative_data});
		this.DeleteGp(dispatch);
		this.props.history.push('/addresults');
	}

	calc_cgpa = (results, dispatch) => {
		const totalcredits = results.map((result) => parseInt(result.credit)).reduce((prev, next) => prev + next);
		const totalGradeVal = results.map((result) => result.gradeVal).reduce((prev, next) => prev + next);
		const cumulative_data = {
			totalcredits: totalcredits,
			totalGradeVal: totalGradeVal
		}
		console.log(cumulative_data);
		dispatch({type: 'CUMULATIVE_DATA', payload: cumulative_data});

		//Semester details 
     	this.props.history.push('results/semesterDetails');
	}
	DeleteGp = (dispatch) => {
		const newResult = [];
		dispatch({ type: 'DELETE_GP', payload: newResult });

	};

	ContinueCalc = () => {
		this.props.history.push('/addresults');
	};
	render() {
		return (
			<Consumer>
				{(value) => {
					const { results, dispatch } = value;
					return (
						<div className="result">

							<div className="back">
								<Link to="/addresults" className="back-to">Back</Link>
							</div>
							<div className="container mt-5">
								<div className="card">
									<table className="table">
										<thead>
											<tr>
												<th>Course</th>
												<th>Grade</th>
												<th>Credit</th>
											</tr>
										</thead>
										<tbody>{results.map((result) => <Result key={result.id} result={result} />)}</tbody>
									</table>
									{results.length !== 0 ? (
										<div>
										<div className="text-center mb-5">
											<button
												onClick={this.ContinueCalc.bind(this)}
												className="btn mx-2 mt-2 btn-outline-dark"
											>
												Add More Courses
											</button>
											
											<button
												onClick={this.CalcGp.bind(this, results, dispatch)}
												className="btn mx-2 mt-2 btn-outline-dark"
											>
												Calculate GPA
											</button>
											<button
												onClick={this.calc_cgpa.bind(this, results, dispatch)}
												className="btn mt-2 mx-2 btn-outline-dark"
											>
												Calculate CGPA
											</button>
											<button
												onClick={this.DeleteGp.bind(this, dispatch)}
												className="btn mt-2 btn-outline-danger"
											>
												Delete Result
											</button>
											</div>
											<div className="text-center btn-semester">
												<button
													onClick={this.AddNewResult.bind(this, results, dispatch)}
													className="add-new-semester"
												>
													add new semester result
												</button>
											</div>
											</div>
									) : null}
							
								</div>	
										
							</div>

							<div className="gpa-display">
								<Gp />
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default Results;
