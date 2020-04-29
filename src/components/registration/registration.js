import React from 'react';
import {Paper, Grid, Button, TextField, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';
import {Logo} from 'loft-taxi-mui-theme';

function Registration() {

    let handleSubmit = (event) => {
        event.preventDefault();   
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
                    onSubmit={handleSubmit} 
                    href='#'
                >
                    <Grid container direction='column' justify='space-between' style={{height: '220px'}}>
                        <TextField 
                            fullWidth
                            type='text' 
                            label='Адрес электронной почты *'
                            placeholder='Адрес электронной почты'></TextField>
                        <Grid>
                            <TextField 
                                style={{marginRight: '15px'}}
                                type='text' 
                                label='Имя *'
                                placeholder='Имя'></TextField>
                            <TextField 
                                type='text'
                                label='Фамилия *'
                                placeholder='Фамилия'></TextField>
                        </Grid>
                        <TextField 
                            fullWidth
                            type='text' 
                            label='Пароль *'
                            placeholder='Пароль'>
                        </TextField>
                    </Grid>
                </form>
                <Grid item style={{alignSelf: 'flex-end'}}>
                    <Link to='/'><Button 
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

export default Registration
