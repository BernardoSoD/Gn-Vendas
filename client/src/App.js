import React from 'react';
import NavBar from './navbar/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/homepage/Home';

class App extends React.Component{
    render(){
        return (
            <Router>
                <NavBar/>
                <Route exact path="/" component={Home} />
                <Route path="/register" component={Register} />
            </Router>
        );
    }
}

export default App;