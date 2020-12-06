import Axios from 'axios';
import React from 'react';

class BuyPrompt extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Username: '',
            CPF: '',
            Phone: ''
        };
        
        this.BuyAction = this.BuyAction.bind(this);
    }

    BuyAction(){
        const usuario = this.state.Username;
        const usuariocpf = this.state.CPF;
        const usuariophone = this.state.Phone;
        if (usuario.length === 0 || usuariocpf.length === 0 || usuariophone.length === 0){
            alert("Todos os campos devem ser preenchidos!");
        } else if (!(/^[ ]*(.+[ ]+)+.+[ ]*$/.test(usuario))){
            alert('Nome inválido');
        } else if (usuariocpf.length < 11 || !(/^[1-9]{2}?[0-9]{9}$/.test(usuariocpf))){
            alert('CPF inválido');
        } else if (!(/^[1-9]{2}9?[0-9]{8}$/.test(usuariophone))){
            alert('Número de contato inválido');
        } else {
            Axios.post('http://localhost:3001/gnapi', {
            Username: usuario,
            CPF: usuariocpf,
            Phone: usuariophone,
            ProductName: this.props.ProductName,
            Price: this.props.Price
            }).then(response => {
                let resultline = document.getElementById("ResultLine");
                if (response.data[0]){
                    resultline.textContent = `Erro: ${response.data[1]} | Descrição do erro: ${response.data[2]}`;
                } else {
                    resultline.textContent = `Id do boleto: ${response.data[1]} | Link para o pdf do boleto: ${response.data[2]}`;
                }
                resultline.style.display = "block";
            });
            document.getElementById(`fecharPrompt${this.props.index}`).click();
        }
    }

    render(){
        return (
            <div className="modal fade" id={`modalContent${this.props.index}`} tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Comprar {this.props.ProductName}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" id={`fecharPrompt${this.props.index}`}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={e => e.preventDefault()}>
                                <div className="form-group">
                                    <label for="yourName">Seu nome completo:</label>
                                    <input required className="form-control" type="text" name="yourName" onChange={event => this.setState({Username: event.target.value})}/>
                                </div>
                                <div className="form-group">
                                    <label for="yourCPF">Seu CPF:</label>
                                    <input required className="form-control" type="number" name="yourCPF" onChange={event => this.setState({CPF: event.target.value})}/>
                                    <small className="form-text text-muted">Escreva apenas números!</small>
                                </div>
                                <div className="form-group">
                                    <label for="yourNumber">Número de contato:</label>
                                    <input required type="number" className="form-control" name="yourNumber" onChange={event => this.setState({Phone: event.target.value})}/>
                                    <small className="form-text text-muted">Escreva apenas números!</small>
                                </div>
                                <div className="d-flex flex-fill justify-content-center">
                                    <input type="submit" class="btn btn-primary" onClick={this.BuyAction} value="Confirmar"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BuyPrompt;