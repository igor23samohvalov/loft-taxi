import React from 'react';
import Authorization from '../authorization/authorization.js';
import Registration from '../registration/registration.js';
import './logscreen.css';

class LogScreen extends React.Component {
    state = {
        page: 'toAuthorization'
    }

    loginPageHandler = (e) => {
        this.setState({
            page: e.target.dataset.id
        })
    }

    render() {
        let LoginScreen;
        
        if (this.state.page === 'toAuthorization') {
            LoginScreen = <Authorization onClick={this.loginPageHandler} onMap={this.props.onClick}/>;
        } else if (this.state.page === 'toRegistration') {
            LoginScreen = <Registration onClick={this.loginPageHandler}/>;
        }

        return (
            <div>
                {LoginScreen}
            </div>
        )
    }
}

export default LogScreen;