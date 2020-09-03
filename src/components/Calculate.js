import React, { Component } from 'react';
import Result from './Result';
import { Consumer } from '../Context';
import { Link } from 'react-router-dom';
import Gp from './Gp';
import add from '../asset/add.png'



class Calculate extends Component {

	CalculateGPA = (results, dispatch) => {
		const totalcredits = results.map((result) => parseInt(result.credit)).reduce((prev, next) => prev + next);
		const totalGradeVal = results.map((result) => result.gradeVal).reduce((prev, next) => prev + next);
		let gpa = (totalGradeVal / totalcredits).toFixed(2);
		dispatch({ type: 'GPA', payload: gpa });
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
		this.props.history.push('/');
	}

	
	DeleteGp = (dispatch) => {
		const newResult = [];
		dispatch({ type: 'DELETE_GP', payload: newResult });

	};



	ContinueCalc = () => {
		this.props.history.push('/');
	};
	render() {
		return (
			<Consumer>
				{(value) => {
					const { results, dispatch } = value;
					return (
						<div className="result">

							<div className="back">
								<Link to="/" className="back-to">Back</Link>
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
										<div className="text-center">
											

											<img src={add} onClick={this.ContinueCalc.bind(this)} alt="" className="add-course"/>
											
											<button
												onClick={this.CalculateGPA.bind(this, results, dispatch)}
												className="btn mx-2 mt-2 btn-outline-dark"
											>
												Get GP
											</button>
											
											</div>
											<div className="text-center btn-semester">
												<button
													onClick={this.AddNewResult.bind(this, results, dispatch)}
													className="add-new-semester"
												>
													add new a semester result
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

export default Calculate;
