import React, { useContext, useState } from 'react';
import {Paper, Grid, Button, Link, TextField, Typography} from '@material-ui/core'
import PropTypes from 'prop-types';
import { AuthContext } from '../../AuthContext';

function Authorization(props) {
    const value = useContext(AuthContext);

    const [username, setName] = useState('');

    const [password, setPassword] = useState('')

    let handleLinkClick = (event) => {
        const {target} = event;
        
        const {onSwitch} = props;

        target.dataset.id === 'toRegistration' && onSwitch ? onSwitch(event) : console.log('error')
    }

    let handleSubmit = (event) => {
        event.preventDefault();   
        value.login(username, password);
    }

    return (
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
                    <Typography>Новый пользователь? <Link href='#registration' data-id='toRegistration' onClick={handleLinkClick}>Зарегистрируйтесь</Link></Typography>
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
    )
}

Authorization.propTypes = {
    onSwitch: PropTypes.func.isRequired
}

export default Authorization
