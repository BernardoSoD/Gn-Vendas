import React from 'react';
import Axios from 'axios';
import BuyPrompt from './BuyPrompt';
import ResultLine from './ResultLine';

class Home extends React.Component{

    constructor(){
        super();
        this.state = {
            cards: []
        };
    }

    componentDidMount(){
       Axios.get('http://localhost:3001/').then(
           response => this.setState({cards: response.data})
       );
    }

    render(){
        return (
            <div>
                <div className="d-flex m-2 flex-wrap">
                    {this.state.cards.map(
                    (value, index) => <Card index={index} name={value.nome} price={value.valor.toString().replace(".",",")}/>)}
                </div>
                <div className="d-flex justify-content-center">
                    <ResultLine/>
                </div>
            </div>
        );
    }
}

class Card extends React.Component{

    render(){
        return (
            <div className="card m-2">
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">R${this.props.price}</p>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#modalContent${this.props.index}`}>Comprar</button>
                </div>
                <BuyPrompt index={this.props.index} ProductName={this.props.name} Price={this.props.price}/>
            </div>
        );
    }
}

export default Home;