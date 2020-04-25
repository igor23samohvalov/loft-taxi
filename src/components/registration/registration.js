import React from 'react';
import PropTypes from 'prop-types';
import {Paper, Grid, Button, Link, TextField, Typography} from '@material-ui/core'

function Registration(props) {

    let handleLinkClick = (event) => {
        event.preventDefault();
        const {target} = event;

        const {onSwitch} = props;

        target && onSwitch ? onSwitch(event) : console.log('error')
    }

    let handleSubmit = (event) => {
        event.preventDefault();   
        props.onSwtich(event);
    }

    return (
        <Paper data-testid='authTest' style={{padding: '40px 55px'}}>
            <Grid container alignContent='center' direction='column' justify='space-between' style={{height: '436px'}}>
                <Typography
                    variant='h4'
                >Регистрация</Typography>
                <Typography>Уже зарегистрированы? <Link href='#' data-id='toAuthorization' onClick={handleLinkClick}>Войти</Link></Typography>
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
                <Grid item style={{alignSelf: 'flex-end'}}><Button 
                        type='submit' 
                        form='registration'
                        color='primary'
                        variant='contained'
                    >Зарегистрироваться</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

Registration.propTypes = {
    onSwitch: PropTypes.func.isRequired
}

export default Registration
