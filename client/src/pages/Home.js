import React from 'react';
import Axios from 'axios';

class Home extends React.Component{

    componentDidMount(){
       // Axios.post(url);
    }

    render(){
        return (
            <Card name="oi" price="2,39"/>
        );
    }
}

class Card extends React.Component{

    render(){
        return (
            <div className="d-flex justify-content-center m-2">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text">{this.props.price}</p>
                        <button className="btn btn-primary">Comprar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;