import React from 'react';
import Authorization from './components/authorization.js';
import Registration from './components/registration.js';
import Header from './components/header.js'
import './App.css';

class App extends React.Component {
    state = {
        isAuthorized: true,
        isRegistered: false,
        isMap: false
    }

    render() {
        return (
          <div className='main-container'>
            {this.state.isAuthorized && <Authorization register={this.getRegistered} map={this.getMap}/>}
            {this.state.isRegistered && <Registration name={this.getAuthorized}/>}
            {this.state.isMap && <Header name={this.getAuthorized}/>}
          </div>
        )
    }

    getMap = (e) => {
        e.preventDefault();
        this.setState({
            isAuthorized: false,
            isMap: true
        })
    }

    getRegistered = () => {
        this.setState({
            isAuthorized: false,
            isRegistered: true
        })
    }

    getAuthorized = (e) => {
        e.preventDefault();
        this.setState({
            isAuthorized: true,
            isRegistered: false,
            isMap: false
        })
    }
}

export default App;