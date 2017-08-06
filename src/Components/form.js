import React, {Component} from 'react';

class Form extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            firsName: '',
            secondName: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    concat(user) {
        return user.firsName + ' ' + user.secondName
    }

    handleChange (event) {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        alert('Tu nombre fue subido '+ this.state.firsName + ' ' + this.state.secondName)
        event.preventDefault();
        console.log(this.state)
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>    
                    <label>
                        Nombre:
                        <input type="text" name="firsName" value={this.state.firsName} onChange= {this.handleChange} />
                    </label>
                    <label>
                        Apellido:
                        <input type= "text" name="secondName" value={this.state.secondName} onChange= {this.handleChange} />
                    </label>
                    <input type="submit" value="Subir"/>
                    <p>Hola {this.concat(this.state)}</p>
                </form> 
            </div>
        );
    }
}


export default Form;