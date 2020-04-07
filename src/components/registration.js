import React from 'react';

class Registration extends React.Component {
    render() {
        return (
            <form action='' id='registration' href='#'>
                <legend>Регистрация</legend>
                <p>Уже зарегистрированы? <a href='#' onClick={this.props.name}>Войти</a></p>
                <input type='text' placeholder='Адрес электронной почты*'></input>
                <div>
                    <input type='text' placeholder='Имя*'></input>
                    <input type='text' placeholder='Фамилия*'></input>
                </div>
                <input type='text' placeholder='Пароль*'></input>
                <button type='submit' form='registration' onClick={this.props.name}>Войти</button>
            </form>
       )
    }
}

export default Registration
