import React, { useContext, useState } from 'react';
import './authorization.css';
import {Paper, Grid, Button, Link, TextField, Typography} from '@material-ui/core'
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
        console.log('hey?')
        value.login(username, password);
    }

    return (
        <Paper className='authorization-container' data-testid='authTest'>
            <Grid container alignContent='center' direction='column' justify='space-evenly' style={{height: '100%'}}>
                <Typography 
                    variant='h4'
                >Войти</Typography>
                <form 
                    action='' 
                    id='authorization' 
                    href='#'
                    data-id='toMap' 
                    onSubmit={handleSubmit}
                    required>
                    <Typography>Новый пользователь? <Link href='#registration' data-id='toRegistration' onClick={props.onSwtich}>Зарегистрируйтесь</Link></Typography>
                    <TextField 
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
                <div className='button'><Button 
                        type='submit' 
                        form='authorization' 
                        variant='contained'
                        color='primary'
                    >Войти</Button>
                </div>
            </Grid>
        </Paper>
    )
}

Authorization.propTypes = {
    onSwtich: PropTypes.func.isRequired
}

export default Authorization
