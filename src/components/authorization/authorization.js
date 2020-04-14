import React from 'react';
import './authorization.css';

class Authorization extends React.Component {
    handleLinkClick = (event) => {
        event.preventDefault();
        const {target} = event;
        const {onClick} = this.props;
        if (target && onClick) {
            onClick(event)
        }
    }

    render() {
        return (
            <form action='' id='authorization' href='#'>
                <legend>Войти</legend>
                <p>Новый пользователь? <a href='#registration' data-id='2' onClick={this.handleLinkClick}>Зарегистрируйтесь</a></p>
                <input type='text' placeholder='Имя пользователя*'></input>
                <input type='text' placeholder='Пароль*'></input>
                <button type='submit' form='authorization' data-id='3' onClick={this.handleLinkClick}>Войти</button>
            </form>
        )
    }
}

export default Authorization
