import React, { useState } from 'react';
import {Paper, Grid, Button, TextField, Typography} from '@material-ui/core'
import { Link } from 'react-router-dom';
import { Logo } from 'loft-taxi-mui-theme';
import { logIn } from '../../actions.js'
import { connect } from 'react-redux';

function Authorization(props) {
    const [username, setName] = useState('');

    const [password, setPassword] = useState('')

    let handleLinkClick = (event) => {
        const {target} = event;
        
        const {onSwitch} = props;

        target.dataset.id === 'toRegistration' && onSwitch ? onSwitch(event) : console.log('error')
    }

    let handleSubmit = (event) => {
        event.preventDefault();

        fetch(`https://loft-taxi.glitch.me/auth`, {
            method: 'POST',
            body: JSON.stringify({
                "email": "test5@test.com",
                "password": "000000"
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))

        props.logIn();
    }

    return (
        <Grid container alignItems='center' justify='space-evenly' style={{height: '100vh'}}>
        <Logo />
        <Paper data-testid='authTest' style={{padding: '40px 55px'}}>
            <Grid container alignContent='center' direction='column' justify='space-between' style={{height: '300px'}}>
                <Typography variant='h4'>Войти</Typography>
                <form 
                    action='' 
                    id='authorization' 
                    href='#'
                    data-id='toMap' 
                    onSubmit={handleSubmit}
                    required
                >
                    <Typography>Новый пользователь? <Link to='/registration'>Зарегистрируйтесь</Link></Typography>
                    <TextField 
                        style={{marginBottom: '25px', marginTop: '10px'}}
                        label='Имя пользователя *'
                        placeholder='Имя пользователя'
                        type='text'
                        fullWidth
                        value={username} 
                        onChange={(e) => setName(e.target.value)}>
                    </TextField>
                    <TextField
                        label='Пароль *'
                        placeholder='Пароль' 
                        type='text' 
                        fullWidth
                        value={password} onChange={(e) => setPassword(e.target.value)}>
                    </TextField>              
                </form>
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
        logIn: () => dispatch(logIn())
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(Authorization)
