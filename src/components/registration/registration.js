import React from 'react';
import {Paper, Grid, Button, Typography} from '@material-ui/core';
import { TextField } from 'mui-rff';
import { Link } from 'react-router-dom';
import { Logo } from 'loft-taxi-mui-theme';
import { connect } from 'react-redux';
import { regRequest } from '../../actions.js'
import { Form } from "react-final-form";

const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Это обязательное поле';
    }
    if (!values.name) {
        errors.name = 'Это обязательное поле';
    }
    if (!values.surname) {
        errors.surname = 'Это обязательное поле';
    }
    if (!values.password) {
        errors.password = 'Это обязательное поле';
    }
    return errors;
};

function Registration(props) {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    let handleSubmit = async values => {
        await sleep(300);
        props.regRequest( values )
        props.history.push('/')
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
                <Form 
                    onSubmit={handleSubmit}
                    validate={validate}
                    render={({ handleSubmit }) => (
                        <form 
                            id='registration' 
                            onSubmit={ handleSubmit }
                            noValidate
                        >
                            <Grid container direction='column' justify='space-between' style={{height: '220px'}}>
                                <TextField 
                                    name='email'
                                    label='Адрес электронной почты'
                                    placeholder='Адрес электронной почты'
                                    type='email'
                                    required={true}
                                    fullWidth/>
                                <Grid container style={{flexWrap: 'nowrap'}}>
                                    <TextField 
                                        style={{marginRight: '15px'}}
                                        name='name'
                                        label='Имя'
                                        placeholder='Имя'
                                        type='text'
                                        required={true}/>
                                    <TextField 
                                        name='surname'
                                        label='Фамилия'
                                        placeholder='Фамилия'
                                        type='text'
                                        required={true}/>
                                </Grid>
                                <TextField 
                                    name='password'
                                    label='Пароль'
                                    placeholder='Пароль'
                                    type='password'
                                    required={true}
                                    fullWidth/>
                            </Grid>
                        </form>
                    )}
                />
                <Grid item style={{alignSelf: 'flex-end'}}>
                    <Button 
                        type='submit' 
                        form='registration'
                        color='primary'
                        variant='contained'
                    >Зарегистрироваться</Button>
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
