import React from 'react';
import Map from '../map/map.js';
import Profile from '../profile/profile.js';
import Header from '../header/header.js';
import './logged.css';

class Logged extends React.Component {
    state = {
        isMap: true,
        isProfile: false
    }

    render() {
        const handlersLogged = {
            getMap: () => {
                this.setState({
                    isMap: true,
                    isProfile: false
                })
            },
            getProfile: () => {
                this.setState({
                    isMap: false,
                    isProfile: true
                })
            },
            closeMap: () => {
                this.setState({
                    isMap: false,
                    isProfile: false
                })
            }
        }
        const {getMap, getProfile, closeMap} = handlersLogged
        return (
            <div>
                <Header onClickProfile={getProfile} onClickMap={getMap} onClickExit={closeMap} onLoginScreen={this.props.onAuthorization}/>
                {this.state.isMap && <Map/>}
                {this.state.isProfile && <Profile/>}
            </div>
        )
    }
}

export default Logged