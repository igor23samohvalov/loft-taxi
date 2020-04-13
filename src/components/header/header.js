import React from 'react';
import './header.css';

class Header extends React.Component {
    render () {
        return (
            <header>
                <a href='#map' onClick={this.props.onClickMap}>Карта</a>
                <a href='#profile' onClick={this.props.onClickProfile}>Профиль</a>
                <a href='#' onClick={this.props.onClickExit, this.props.onLoginScreen}>Выйти</a>
            </header>
        )
    }
}

export default Header