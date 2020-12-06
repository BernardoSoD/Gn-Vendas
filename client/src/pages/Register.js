import React from 'react';
import Axios from 'axios';

class Register extends React.Component{
    constructor(){
        super();
        this.state = {
            name: '',
            price: ''
        };
        this.sendData = this.sendData.bind(this);
    }
    
    sendData(){
        const nome = this.state.name;
        const preço = this.state.price.replace(".","").replace(",",".");
        if (preço.search(/[^0-9.]/gi) !== -1){
            alert("Preço inválido");
        } else if (nome.length === 0 || preço.length === 0 || preço.search(/[0-9]/) === -1){
            alert('Os dois campos devem ser preenchidos!');
        } else if (nome.length > 45) {
            alert('O campo "Nome do Produto" não pode ser maior que 45 caracteres');
        } else if (parseFloat(preço) < 0){
            alert('O campo "Preço do Produto" não pode ter valores negativos!');
        }else {
            Axios.post('http://localhost:3001/register',{
                name: nome,
                price: preço
                }).then(
                    e => alert(e.request.response)
            );
        }
    }

    render(){
        return (
            <div className="d-flex justify-content-center">
                <div className="d-flex flex-column align-items-center m-3 border border-warning rounded p-5">
                    <h1 className="flex-fill">Cadastro de Produto</h1>
                    <form onSubmit={e => e.preventDefault()} className="d-flex flex-column">
                        <div className="form-group">
                            <label for="name">Nome do Produto:</label>
                            <input className="form-control" required type="text" name="name" onChange={event => this.setState({name: event.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label for="value">Valor do Produto:</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">R$</div>
                                </div>
                                <input className="form-control" required type="text" name="value" onChange={event => this.setState({price: event.target.value})}/>
                            </div>  
                        </div>
                        <input className="btn btn-primary mb-2" type="submit" value="Cadastrar" onClick={this.sendData}></input>
                    </form>
                </div>
            </div>
        );
    }
}
export default Register;