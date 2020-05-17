import React,{Component} from 'react';
import CardList from './CardsArray';
// import {robots} from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';



class App extends Component{
constructor(){
	super()
	this.state = {
				robots : [],
				searchfield : '',
		}
}

onsearchbox = (event)=>{
	this.setState ({searchfield:event.target.value});
	
	
}

componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users').then(response => {
		return response.json()
}).then(users => {
	return this.setState({robots:users});
})
}

render(){
	const filteredrobots = this.state.robots.filter(robot => 
	{
		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	});
	if(this.state.robots.length === 0 ){
		return <h1> Loading </h1>
	}
	else{
	return (
		<div className = 'tc'>
		<h1 className = 'f1'> My Robo Website </h1>
		<SearchBox onsearchbox={this.onsearchbox} />
		<Scroll>
		<CardList robots={filteredrobots} />
		</Scroll>
		
		</div>
		);}
}
}


export default App;