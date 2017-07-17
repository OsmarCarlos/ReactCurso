var React = require('react');


var Name = React.createClass({

	name(user){
		return user.firstName + ' ' +user.lastName
	},

	render(){

		const user = {
			firstName: 'Osmar',
			lastName: 'Rodriguez'
		}

		return(
			<h1>Hola {this.name(user)}</h1>
			);
	}
});

module.exports = Name;