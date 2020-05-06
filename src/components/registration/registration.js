import React, { useState } from 'react';
import {Paper, Grid, Button, TextField, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';
import {Logo} from 'loft-taxi-mui-theme';
import { connect } from 'react-redux';
import { regRequest } from '../../actions.js'

function Registration(props) {
    const [email, setEmail] = useState('');

    const [name, setName] = useState('');

    const [surname, setSurname] = useState('')

    const [password, setPassword] = useState('')

    let handleRegistration = () => {
        let regData = {email, name, surname, password}
        props.regRequest( regData )
    }

    return (
        <Grid container alignItems='center' justify='space-evenly' style={{height: '100vh'}}>
        <Logo />
        <Paper data-testid='authTest' style={{padding: '40px 55px'}}>
            <Grid container alignContent='center' direction='column' justify='space-between' style={{height: '436px'}}>
                <Typography
                    variant='h4'
                >Регистрация</Typography>
                <Typography>Уже зарегистрированы? <Link to='/'>Войти</Link></Typography>
                <form 
                    action='' 
                    id='registration' 
                    data-id='toAuthorization' 
                    href='#'
                >
                    <Grid container direction='column' justify='space-between' style={{height: '220px'}}>
                        <TextField 
                            fullWidth
                            onChange={(e) => setEmail(e.target.value)}
                            type='email' 
                            label='Адрес электронной почты *'
                            placeholder='Адрес электронной почты'></TextField>
                        <Grid>
                            <TextField 
                                style={{marginRight: '15px'}}
                                onChange={(e) => setName(e.target.value)}
                                type='text' 
                                label='Имя *'
                                placeholder='Имя'></TextField>
                            <TextField 
                                type='text'
                                onChange={(e) => setSurname(e.target.value)}
                                label='Фамилия *'
                                placeholder='Фамилия'></TextField>
                        </Grid>
                        <TextField 
                            fullWidth
                            onChange={(e) => setPassword(e.target.value)}
                            type='password' 
                            label='Пароль *'
                            placeholder='Пароль'>
                        </TextField>
                    </Grid>
                </form>
                <Grid item style={{alignSelf: 'flex-end'}}>
                    <Link to='/' onClick={handleRegistration}><Button 
                        type='submit' 
                        form='registration'
                        color='primary'
                        variant='contained'
                    >Зарегистрироваться</Button></Link>
                </Grid>
            </Grid>
        </Paper>
        </Grid>
    )
}

const mapStateToProp = state => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        regRequest: (regData) => dispatch(regRequest(regData))
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(Registration)
