import React from 'react';
import { Paper, Grid, Button, Typography } from '@material-ui/core';
import { TextField } from 'mui-rff';
import { Link } from 'react-router-dom';
import { Logo } from 'loft-taxi-mui-theme';
import { logInRequest } from '../../actions.js'
import { connect } from 'react-redux';
import { Form } from "react-final-form";

const validate = values => {
    const errors = {};

    if (!values.userName) {
        errors.userName = 'Неверный логин';
    }
    if (!values.password) {
        errors.password = 'Неправильный пароль';
    }
    return errors;
};

function Authorization(props) {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    let handleSubmit = async values => {
        await sleep(300);

        if (values.userName !== 'test5@test.com') {
            return { userName: 'Неверный логин'}
        }
        if (values.password !== '000000') {
            return { password: 'Неверный пароль'}
        }
        props.logInRequest(values.userName, values.password);
    }

    return (
        <Grid container alignItems='center' justify='space-evenly' style={{height: '100vh'}}>
        <Logo />
        <Paper data-testid='authTest' style={{padding: '40px 55px'}}>
            <Grid container alignContent='center' direction='column' justify='space-between' style={{height: '300px'}}>
                <Typography variant='h4'>Войти</Typography>
                    <Form 
                        validate={validate}
                        onSubmit={handleSubmit}
                        initialValues={{ userName: props.username, password: props.password }}
                        render={({ handleSubmit}) => (
                            <form 
                                id='authorization' 
                                onSubmit={ handleSubmit }
                                noValidate
                            >
                                <Typography>Новый пользователь? <Link to='/registration'>Зарегистрируйтесь</Link></Typography>
                                <TextField
                                    style={{marginBottom: '25px', marginTop: '10px'}}
                                    name='userName'
                                    label='Имя пользователя'
                                    placeholder='Имя пользователя'
                                    type='email'
                                    required={true}
                                    fullWidth/>
                                <TextField
                                    name='password'
                                    label='Пароль'
                                    placeholder='Пароль'
                                    type='password'
                                    required={true}
                                    fullWidth/>
                            </form>
                        )}
                    />
                <Grid item style={{alignSelf: 'flex-end'}}>
                    <Button type='submit' form='authorization' variant='contained' color='primary'>Войти</Button>
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
        logInRequest: (username, password) => dispatch(logInRequest({username, password}))
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(Authorization)
