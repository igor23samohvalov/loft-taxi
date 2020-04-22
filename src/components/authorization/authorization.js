import React, { useContext, useState } from 'react';
import './authorization.css';
import {Paper, Grid, Button, Link, TextField, Typography, Input} from '@material-ui/core'
import PropTypes from 'prop-types';
import { AuthContext } from '../../AuthContext';

function Authorization(props) {
    const value = useContext(AuthContext);

    const [username, setName] = useState('');

    const [password, setPassword] = useState('')

    // let handleLinkClick = (event) => {
    //     const {target} = event;
        
    //     const {onClick, onMap} = props;
        
    //     if (target.dataset.id === 'toRegistration' && onClick) {
    //         onClick(event)
    //     } else if (target.dataset.id === 'toMap' && onMap) {
            
    //         onMap(event)
    //     }
    // }

    let handleSubmit = (event) => {
        event.preventDefault();   
        value.login(username, password);
        props.onMap(event);
    }

    return (
        <form action='' id='authorization' href='#' data-id='toMap' onSubmit={handleSubmit}>
        <Typography>Войти</Typography>
        <Typography>Новый пользователь? <Link href='#registration' data-id='toRegistration' onClick={props.onClick}>Зарегистрируйтесь</Link></Typography>
        <Input placeholder="Имя пользователя*" type="text" value={username} onChange={(e) => setName(e.target.value)}></Input>
        <Input placeholder="Пароль *" type="text" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
        <Button 
            type='submit' 
            form='authorization' 
            data-id='toMap'
            
            // onClick={handleLinkClick}
            >Войти</Button>
        </form>
    )
}

Authorization.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Authorization
