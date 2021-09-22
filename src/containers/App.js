import React, { Component } from 'react'; 
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'; 
import { robots } from '../components/Robots';
import Scroll from '../components/Scroll.js';
import ErrorBoundary  from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
	constructor () {
		super()
		this.state = {
			robots: robots,
			searchfield: ' '
		}
	}

	// componentDidMount () {
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 	.then(response => response.json())
	// 	.then(users => {this.setState({ robots : users})}); 
	// }
	// We could use the above to get users from an API but for this page I'd like it to be the users I've created

	onSearchChange = (event) => {
			this.setState({searchfield: event.target.value})
	}
	render() {
			const { robots, searchfield} = this.state; 
			const filteredRobot = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return (
			<div className = 'tc'>
					<h1 className = 'f1'>RoboFriends - Hire a Robot today!</h1>
					<SearchBox searchChange = {this.onSearchChange}/> 
				<Scroll>
					<ErrorBoundary>
						<CardList robots = {filteredRobot}/>
					</ErrorBoundary>	
				</Scroll>
			</div> 
		);
	}
}

export default App; 