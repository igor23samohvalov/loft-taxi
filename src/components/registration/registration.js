import React from 'react';
import './registration.css';

class Registration extends React.Component {

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
            <form action='' id='registration' href='#'>
                <legend>Регистрация</legend>
                <p>Уже зарегистрированы? <a href='#' data-id='toAuthorization' onClick={this.handleLinkClick}>Войти</a></p>
                <input type='text' placeholder='Адрес электронной почты*'></input>
                <div>
                    <input type='text' placeholder='Имя*'></input>
                    <input type='text' placeholder='Фамилия*'></input>
                </div>
                <input type='text' placeholder='Пароль*'></input>
                <button type='submit' form='registration' data-id='toAuthorization' onClick={this.handleLinkClick}>Зарегистрироваться</button>
            </form>
       )
    }
}

export default Registration
