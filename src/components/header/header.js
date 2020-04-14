import React from 'react';
import './header.css';

class Header extends React.Component {
    render () {
        return (
            <header>
                <a href='#map' data-id='3' onClick={this.props.onClick}>Карта</a>
                <a href='#profile' data-id='4' onClick={this.props.onClick}>Профиль</a>
                <a href='#' data-id='1' onClick={this.props.onClick}>Выйти</a>
            </header>
        )
    }
}

export default Header