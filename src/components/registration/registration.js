import React from 'react';
import './registration.css';
import PropTypes from 'prop-types';
import {Paper, Grid, Button, Link, TextField, Typography, FormControl} from '@material-ui/core'

function Registration(props) {

    // let handleLinkClick = (event) => {
    //     event.preventDefault();
    //     const {target} = event;

    //     const {onClick} = props;

    //     if (target && onClick) {
    //         onClick(event)
    //     }
    // }

    let handleSubmit = (event) => {
        event.preventDefault();   
        props.onSwtich(event);
    }

    return (
        <Paper className='authorization-container' data-testid='authTest'>
            <Grid container alignContent='center' direction='column' justify='space-evenly' style={{height: '100%'}}>
                <Typography
                    variant='h4'
                >Регистрация</Typography>
                <Typography>Уже зарегистрированы? <Link href='#' data-id='toAuthorization' onClick={props.onSwtich}>Войти</Link></Typography>
                <form 
                    action='' 
                    id='registration' 
                    data-id='toAuthorization' 
                    onSubmit={handleSubmit} 
                    href='#'
                >
                    <TextField 
                        fullWidth
                        type='text' 
                        label='Адрес электронной почты *'
                        placeholder='Адрес электронной почты'></TextField>
                    <div className='inlineInput'>
                        <TextField 
                            type='text' 
                            label='Имя *'
                            placeholder='Имя'></TextField>
                        <TextField 
                            type='text'
                            label='Фамилия *'
                            placeholder='Фамилия'></TextField>
                    </div>
                    <TextField 
                            fullWidth
                            type='text' 
                            label='Пароль *'
                            placeholder='Пароль'></TextField>
                </form>
                <div className='button'><Button 
                        type='submit' 
                        form='registration'
                        color='primary'
                        variant='contained'
                    >Зарегистрироваться</Button>
                </div>
            </Grid>
        </Paper>
    )
}

Registration.propTypes = {
    onSwtich: PropTypes.func.isRequired
}

export default Registration
