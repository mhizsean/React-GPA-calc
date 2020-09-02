import React, { Component } from 'react';
import { Consumer } from '../../Context';
import { Link } from 'react-router-dom';

class SemesterDetails extends Component {
	semesterDetails = (cumulativeData) => {
		switch (cumulativeData.length) {
			case 1:
			return <p style={{ marginTop: '-120px' }}>You are calculating for a single semester</p>;
		    case 2:
			return <p style={{ marginTop: '-120px' }}>You are calculating for Two semesters, 1 year</p>;
		    case 3:
			return <p style={{ marginTop: '-120px' }}>You are calculating for 3 semesters, 1.5 years</p>;
		    case 4:
			return <p style={{ marginTop: '-120px' }}>You are calculating for 4 semesters, 2 yearS</p>;
		    case 5:
			return <p style={{ marginTop: '-120px' }}>You are calculating for 5 semesters, 2.5 years</p>;
		    case 6:
			return <p style={{ marginTop: '-120px' }}>You are calculating for 6 semesters, 3 years</p>;
		    case 7:
			return <p style={{ marginTop: '-120px' }}>You are calculating for 7 semesters, 3.5 years</p>;
		    case 8:
			return <p style={{ marginTop: '-120px' }}>You are calculating for 8 semesters, 4 years</p>;
		    case 9:
			return <p style={{ marginTop: '-120px' }}>You are calculating for 9 semesters, 4.5 years</p>;
		    case 10:
			return <p style={{ marginTop: '-120px' }}>You are calculating for 10 semesters, 5 years</p>;
			default:
				return <p style={{ marginTop: '-120px' }}>Sorry we can't evaluate this for you</p>;
		}
	};

	getCgpa = (cumulativeData, dispatch) => {
		const cumulativeTotalcredits = cumulativeData
			.map((result) => result.totalcredits)
			.reduce((prev, next) => prev + next);
		const cumulativeTotalGradeVal = cumulativeData
			.map((result) => result.totalGradeVal)
			.reduce((prev, next) => prev + next);
		const cgpa = (cumulativeTotalGradeVal / cumulativeTotalcredits).toFixed(2);
		console.log(cgpa);
		dispatch({ type: 'CGPA', payload: cgpa });
		this.props.history.push('/spinner');
		setTimeout(() => {
			this.props.history.push('/results/cgpa');
		}, 3000);
		dispatch({ type: 'DELETE_CUMULATIVE_DATA', payload: [] });
		dispatch({ type: 'DELETE_GP', payload: [] });
	};

	render() {
		return (
			<Consumer>
				{(value) => {
					const { cumulativeData, dispatch } = value;
					return (
						<div style={styles} className="row justify-content-center align-items-center mx-auto">
							<div className="col-10 mx-auto text-center">
								{/* <h1 style={{ marginTop: '-120px' }}>You are calculating for 4 semesters</h1> */}
								{this.semesterDetails(cumulativeData)}
								<div>
									<button
										onClick={this.getCgpa.bind(this, cumulativeData, dispatch)}
										className="btn btn-primary"
									>
										Get CGPA
									</button>
									{cumulativeData.length > 10 ? (
										<Link
											to ="/results"
											className="btn mx-2 btn-primary"
										>
											Get back to Results
										</Link>
									) : null}
								</div>
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

const styles = {
	height: 'calc(100vh - 55px)',
	background: '#ccc',
	width: '100%'
};

export default SemesterDetails;
