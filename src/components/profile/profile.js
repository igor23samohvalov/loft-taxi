import React, {useState} from 'react';
import Header from '../header/header.js';
import {Paper, Grid, Button, FormLabel, Typography, TextField, FormControl} from '@material-ui/core'
import { connect } from 'react-redux';
import { saveCardDataRequest } from '../../actions.js'

function Profile(props) {
    const [cardnumber, setCardnumber] = useState('');

    const [expirydate, setExpirydate] = useState('');

    const [cardname, setCardname] = useState('')

    const [CVC, setCVC] = useState('')

    let handleSubmit = (event) => {
        event.preventDefault();
        let profileData = {cardnumber, expirydate, cardname, CVC}
        props.saveCardDataRequest( profileData );
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
                                                    placeholder='0000 0000 0000 0000'
                                                    onChange={(e) => setCardnumber(e.target.value)}>
                                                </TextField>
                                            </FormControl>
                                            <FormControl fullWidth margin='normal'>
                                                <FormLabel>Срок действия*</FormLabel>
                                                <TextField 
                                                    type='date' 
                                                    placeholder='00/00'
                                                    onChange={(e) => setExpirydate(e.target.value)}>    
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
                                                    placeholder='USER NAME'
                                                    onChange={(e) => setCardname(e.target.value)}>
                                                </TextField>
                                            </FormControl>
                                            <FormControl fullWidth margin='normal'>
                                                <FormLabel>CVC*</FormLabel>
                                                <TextField 
                                                    type='number'
                                                    placeholder='CVC'
                                                    onChange={(e) => setCVC(e.target.value)}>
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

const mapStateToProp = state => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveCardDataRequest: (profileData) => dispatch(saveCardDataRequest(profileData))
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(Profile)