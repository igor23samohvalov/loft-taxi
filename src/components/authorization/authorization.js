import React from 'react';
import './authorization.css';

class Authorization extends React.Component {

    handleLinkClick = (event) => {
        const {target} = event;

        const {onClick} = this.props;
        
        if (target && onClick) {
            onClick(event)
        }
    }

    handleAppLinkClick = (event) => {
        event.preventDefault();
        const {target} = event;

        const {onMap} = this.props;

        if (target && onMap) {
            onMap(event)
        }
    }

    render() {
        return (
            <form action='' id='authorization' href='#'>
                <legend>Войти</legend>
                <p>Новый пользователь? <a href='#registration' data-id='toRegistration' onClick={this.handleLinkClick}>Зарегистрируйтесь</a></p>
                <input type='text' placeholder='Имя пользователя*'></input>
                <input type='text' placeholder='Пароль*'></input>
                <button type='submit' form='authorization' data-id='toMap' onClick={this.handleAppLinkClick}>Войти</button>
            </form>
        )
    }
}

export default Authorization
