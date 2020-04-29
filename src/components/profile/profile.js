import React from 'react';
import Header from '../header/header.js';
import {Paper, Grid, Button, FormLabel, Typography, TextField, FormControl} from '@material-ui/core'

function Profile(props) {
    let handleSubmit = (event) => {
        event.preventDefault();
        
        fetch(`https://loft-taxi.glitch.me/card`, {
            method: 'POST',
            body: JSON.stringify({
                "cardNumber": "2000 0000 0000 0000",
                "expiryDate": "01/22",
                "cardName": "TEST",
                "cvc": "910",
                "token": "AUTH_TOKEN"
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
    }

    return (
        <div data-testid='profTest'>
            <Header onSwitch={props.onSwitch}/>
            <Grid 
                container
                alignContent='center'
                direction='column'
            >
                <Paper style={{padding: '44px 60px', marginTop: '60px'}}>
                    <Grid
                    container
                    alignItems='center'
                    direction='column'>
                        <Typography
                            variant='h4'
                            >Профиль
                        </Typography>
                        <Typography variant='body1' style={{marginBottom: '40px'}}>
                            Способ оплаты
                        </Typography>
                        <form action='' href='#' id='profileForm' onSubmit={handleSubmit}>
                            <Grid
                                style={{height: '320px'}}
                                justify='space-between'
                                container
                                alignItems='center'
                                direction='column'
                                spacing={3}
                            >
                                <Grid 
                                container
                                direction='row'
                                alignContent='center'
                                spacing={4}
                                >
                                    <Grid item>
                                        <Paper style={{width: '324px', height: '190px', padding: '20px'}}>
                                            <FormControl fullWidth margin='normal'>
                                                <FormLabel>Номер карты*</FormLabel>
                                                <TextField 
                                                    type='number' 
                                                    placeholder='0000 0000 0000 0000'>
                                                </TextField>
                                            </FormControl>
                                            <FormControl fullWidth margin='normal'>
                                                <FormLabel>Срок действия*</FormLabel>
                                                <TextField 
                                                    type='number' 
                                                    placeholder='00/00'>    
                                                </TextField>
                                            </FormControl>
                                        </Paper>
                                    </Grid>
                                    <Grid item>                                    
                                        <Paper style={{width: '324px', height: '190px', padding: '20px'}}>
                                            <FormControl fullWidth margin='normal'>
                                                <FormLabel>Имя владельца*</FormLabel>
                                                <TextField 
                                                    type='text'
                                                    placeholder='USER NAME'>
                                                </TextField>
                                            </FormControl>
                                            <FormControl fullWidth margin='normal'>
                                                <FormLabel>CVC*</FormLabel>
                                                <TextField 
                                                    type='number' 
                                                    placeholder='CVC'>
                                                </TextField>
                                            </FormControl>
                                        </Paper>
                                    </Grid>
                                </Grid>
                                <Grid item><Button 
                                    type='submit' 
                                    form='profileForm'
                                    color='primary'
                                    variant='contained'
                                    >Сохранить</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    )
}

export default Profile;