import React, { Component } from 'react';
import { Consumer } from '../Context';
import del from '../asset/del.png';


class Result extends Component {
	deleteResult(dispatch, id) {
		dispatch({ type: 'DELETE_RESULT', payload: id });
	}

	render() {
		const { id, course, grade, credit } = this.props.result;
		return (
			<Consumer>
				{(value) => {
					const { dispatch } = value;
					return (
						<React.Fragment>
							<tr>
								<td>{course}</td>
								<td>{grade}</td>
								<td>{credit}</td>
								<td>
									
									
									<div className="crud-btn">
                                        <img src={del} alt="" onClick={this.deleteResult.bind(this, dispatch, id)}/>
                                    </div>
								</td>
							</tr>
						</React.Fragment>
					);
				}}
			</Consumer>
		);
	}
}

export default Result;
