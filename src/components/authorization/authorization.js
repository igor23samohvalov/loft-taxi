import React from 'react';
import './authorization.css';

class Authorization extends React.Component {
    handleLinkClick = (event) => {
        const {target} = event;
        const {onRegistration} = this.props;
        if (target && onRegistration) {
            onRegistration(event)
        }
    }

    render() {
        return (
            <form action='' id='authorization' href='#'>
                <legend>Войти</legend>
                <p>Новый пользователь? <a href='#registration' onClick={this.handleLinkClick}>Зарегистрируйтесь</a></p>
                <input type='text' placeholder='Имя пользователя*'></input>
                <input type='text' placeholder='Пароль*'></input>
                <button type='submit' form='authorization' onClick={this.props.onLogging}>Войти</button>
            </form>
        )
    }
}

export default Authorization
