import React from 'react';
import './registration.css';
import PropTypes from 'prop-types';
import {Paper, Grid, Button, Link, TextField, Typography, Input} from '@material-ui/core'

function Registration(props) {

    let handleLinkClick = (event) => {
        event.preventDefault();
        const {target} = event;

        const {onClick} = props;

        if (target && onClick) {
            onClick(event)
        }
    }

    return (
        <form action='' id='registration' href='#'>
            <Typography>Регистрация</Typography>
            <p>Уже зарегистрированы? <Link href='#' data-id='toMap' onClick={props.onMap}>На карту без авторизации</Link></p>
            <Input type='text' placeholder='Адрес электронной почты*'></Input>
            <div>
                <Input type='text' placeholder='Имя*'></Input>
                <Input type='text' placeholder='Фамилия*'></Input>
            </div>
            <Input type='text' placeholder='Пароль*'></Input>
            <button type='submit' form='registration' data-id='toAuthorization' onClick={handleLinkClick}>Зарегистрироваться</button>
        </form>
    )
}

Registration.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Registration
