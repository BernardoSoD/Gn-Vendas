import React from 'react';
import { Link } from 'react-router-dom';
import Img from './GNmarca.png';

class NavBar extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
                <img src={Img} className="navbar-brand" alt="Marca da GerenciaNet"></img>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Content" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ContentNavBar/>
            </nav>
        );
    }
}

class ContentNavBar extends React.Component{
    render(){
        return (
            <div>
                 <div className="collapse navbar-collapse" id="Content">
                    <ul className="navbar-nav">
                        <li className="nav-item mr-1 p-1">
                            <Link to="/" className="font-weight-bold text-decoration-none text-dark"><h5>Página Inicial</h5></Link>
                        </li>
                        <li className="nav-item mr-1 p-1">
                            <Link to="/register" className="text-decoration-none text-dark"><h5>Cadastrar um produto</h5></Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}


export default NavBar;