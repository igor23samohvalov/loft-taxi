import React from 'react';
import Authorization from './components/authorization/authorization.js';
import Registration from './components/registration/registration.js';
import Logged from './components/logged/logged.js';
import './App.css';

class App extends React.Component {
    state = {
        isAuthorized: true,
        isRegistered: false,
        isMap: false
    }

    render() {
        const handlersApp = {
            getMap: (e) => {
                e.preventDefault();
                this.setState({
                    isAuthorized: false,
                    isMap: true
                })
            },
            getRegistered: (e) => {
                this.setState({
                    isAuthorized: false,
                    isRegistered: true
                })
            },
            getAuthorized: (e) => {
                e.preventDefault();
                this.setState({
                    isAuthorized: true,
                    isRegistered: false,
                    isMap: false
                })
            }
        }

        let Screen;
        
        if (this.state.isAuthorized) {
            Screen = <Authorization onRegistration={handlersApp.getRegistered} onLogging={handlersApp.getMap}/>;
        } else if (this.state.isRegistered) {
            Screen = <Registration onAuthorization={handlersApp.getAuthorized}/>
        } else if (this.state.isMap) {
            Screen = <Logged onAuthorization={handlersApp.getAuthorized}/>
        }
        return (
          <div className='main-container'>
              {Screen}
          </div>
        )
    };
}

export default App;