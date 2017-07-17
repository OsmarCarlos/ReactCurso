var React = require('react');

var Hora = React.createClass({

	getInitialState(){
		return {
			date: new Date()
		};
	},

	componentDidMount(){
		this.timerID = setInterval(
			() => this.tick(), 1000);
	},

	componentWillUnmount() {
		clearInterval(this.timerID);
	},


	tick() {
		this.setState({
			date: new Date()
		})
	},


	render() {
		return(
			<div>
				<h1>La hora es:</h1>
				<h2>{this.state.date.toLocaleTimeString()}</h2>	
			</div>
			);	
	}


});

module.exports = Hora;