import React, { Component } from 'react';

const Context = React.createContext();
const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_RESULT':
			return {
				...state,
				results: [ action.payload, ...state.results ]
			};
		case 'DELETE_RESULT':
			return {
				...state,
				results: state.results.filter((result) => result.id !== action.payload)
			};
		case 'DELETE_GP':
			return {
				//Delete all from the list
				results: action.payload
			};
		case 'GPA':
			return {
				gpa: action.payload
			};
		case 'CUMULATIVE_DATA':
		     return {
			   ...state,
			   cumulativeData: [action.payload, ...state.cumulativeData]
			 };
		case 'CGPA':
		 return{
			 cgpa: action.payload
		 }
		 case 'DELETE_CUMULATIVE_DATA':
		  return{
			  cumulativeData: action.payload
		  }
		default:
			return state;
	}
};
export class Provider extends Component {
	state = {
		results: [
			// {
			// 	id: 1,
			// 	course: 'Eng',
			// 	grade: 'A',
			// 	unit: '3'
			// },
			// {
			// 	id: 2,
			// 	course: 'Math',
			// 	grade: 'B',
			// 	unit: '3'
			// },
			// {
			// 	id: 3,
			// 	course: 'Biology',
			// 	grade: 'C',
			// 	unit: '1'
			// }
		],
         cumulativeData :[

		 ],
		gpa: 0,
		cgpa:0,
		dispatch: (action) => {
			this.setState((state) => reducer(state, action));
		}
	};

	render() {
		return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
	}
}

export const Consumer = Context.Consumer;
