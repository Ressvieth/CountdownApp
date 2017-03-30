import React, { Component } from 'react';
import Clock from './clock.jsx';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadline: 'June 3, 2017',
			newDeadline: ''
		}
	}

	changeDeadline() {
		this.setState({deadline: this.state.newDeadline})
	}

	render() {
		return (
		<div className="App">
			<div className="App-title">Countdown to {this.state.deadline}</div>
			<Clock deadline={this.state.deadline}/>
			<Form inline className="Deadline-input">
				<FormControl placeholder='your date' onChange={event => this.setState({newDeadline: event.target.value})}/>
				<Button onClick={() => this.changeDeadline()}>Set The Date</Button>
			</Form>
		</div>
		)
	}
}

export default App;