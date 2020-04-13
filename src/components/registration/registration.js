import React from 'react';
import './registration.css';

class Registration extends React.Component {
    render() {
        return (
            <form action='' id='registration' href='#'>
                <legend>Регистрация</legend>
                <p>Уже зарегистрированы? <a href='#' onClick={this.props.onAuthorization}>Войти</a></p>
                <input type='text' placeholder='Адрес электронной почты*'></input>
                <div>
                    <input type='text' placeholder='Имя*'></input>
                    <input type='text' placeholder='Фамилия*'></input>
                </div>
                <input type='text' placeholder='Пароль*'></input>
                <button type='submit' form='registration' onClick={this.props.onAuthorization}>Зарегистрироваться</button>
            </form>
       )
    }
}

export default Registration
