import React, {Component} from 'react';

class Form extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            firsName: '',
            secondName: '',
            data: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        var object = {
            firsName: this.state.firsName,
            secondName: this.state.secondName
        }
        this.setState({
            data: this.state.data.concat([object])
        })
        console.log(this.data)
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
                </form> 
                {this.state.data.map((person, i) => <Print key={i} personData = {person}/>)}
            </div>
        );
    }
}

class Print extends Component {

    concat(user) {
        return user.firsName + ' ' + user.secondName
    }

    render() { 
        var style = {
            fontSize: 20,
            color: 'red'
        };
        return(
            <div>
                <p style={style}>Hola {this.concat(this.props.personData)}</p>
            </div>
        )
    }
}


export default Form;