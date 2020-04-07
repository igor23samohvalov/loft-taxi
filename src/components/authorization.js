import React from 'react';

class Authorization extends React.Component {
    render() {
        return (
            <form action='' id='authorization' href='#'>
                <legend>Войти</legend>
                <p>Новый пользователь? <a href='#registration' onClick={this.props.register}>Зарегистрируйтесь</a></p>
                <input type='text' placeholder='Имя пользователя*'></input>
                <input type='text' placeholder='Пароль*'></input>
                <button type='submit' form='authorization' onClick={this.props.map}>Войти</button>
            </form>
        )
    }
}

export default Authorization
