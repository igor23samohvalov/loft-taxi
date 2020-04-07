import React from 'react';
import Map from './map.js';
import Profile from './profile.js'

class Header extends React.Component {
    state = {
        isMap: true,
        isProfile: false
    }

    render() {
        return (
            <div>
                <header>
                    <a href='#map' onClick={this.getMap}>Карта</a>
                    <a href='#profile' onClick={this.getProfile}>Профиль</a>
                    <a href='#' onClick={this.closeMap, this.props.name}>Выйти</a>
                </header>
                {this.state.isMap && <Map name={this.getProfile}/>}
                {this.state.isProfile && <Profile name={this.getProfile}/>}
            </div>
        )
    }

    getMap = () => {
        this.setState({
            isMap: true,
            isProfile: false
        })
    }

    getProfile = () => {
        this.setState({
            isMap: false,
            isProfile: true
        })
    }

    closeMap = () => {
        this.setState({
            isMap: false,
            isProfile: false
        })
    }

}

export default Header