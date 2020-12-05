import React from 'react';
import Axios from 'axios';

class Register extends React.Component{
    constructor(){
        super();
        this.state = {
            name: '',
            value: null
        };
    }
    
    sendData(){
        
    }

    render(){
        return (
            <div className="d-flex flex-column align-items-center m-2">
                <h1 className="flex-fill">Cadastro de Produto</h1>
                <form onSubmit={e => e.preventDefault()} className="d-flex flex-column">
                    <label for="name">Nome do Produto:</label>
                        <input className="form-control" required type="text" name="name" onChange={event => this.setState({name: event.target.value})}/>
                    <label for="value">Valor do Produto:</label>
                        <input className="form-control" required type="text" name="value" onChange={event => this.setState({value: event.target.value})}/>
                        <small class="form-text text-muted">Use vírgulas!</small>
                    <br/>
                    <input className="btn btn-primary" type="submit" value="Cadastrar" onClick={this.sendData}></input>
                </form>
            </div>
        );
    }
}
export default Register;