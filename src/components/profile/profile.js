import React from 'react';
import Header from '../header/header.js';
import './profile.css';
import {Paper, Grid, Button, FormLabel, Typography, TextField, FormControl} from '@material-ui/core'

function Profile(props) {
    return (
        <div data-testid='profTest'>
            <Header onSwitch={props.onSwitch}/>
            <Grid 
                container
                alignContent='center'
                direction='column'
            >
                <Paper className='profile-container'>
                    <Grid
                    container
                    alignItems='center'
                    direction='column'>
                        <Typography
                            variant='h4'
                            >Профиль
                        </Typography>
                        <p
                            className='profile-pay'
                            >Способ оплаты
                        </p>
                        <form action='' href='#' id='profileForm'>
                            <Grid
                                className='hey'
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
                                        <Paper className='papers'>
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
                                        <Paper className='papers'>
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