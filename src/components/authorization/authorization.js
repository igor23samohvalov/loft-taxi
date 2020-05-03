import React, { useState } from 'react';
import {Paper, Grid, Button, TextField, Typography} from '@material-ui/core'
import { Link } from 'react-router-dom';
import { Logo } from 'loft-taxi-mui-theme';
import { logInRequest } from '../../actions.js'
import { connect } from 'react-redux';

function Authorization(props) {
    const [username, setName] = useState(props.username);

    const [password, setPassword] = useState(props.password)

    let handleSubmit = (event) => {
        event.preventDefault();
        props.logInRequest(username, password);
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
        logInRequest: (username, password) => dispatch(logInRequest({username, password}))
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(Authorization)
