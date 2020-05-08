import React from 'react';
import { Paper, Grid, Button, InputLabel } from '@material-ui/core';
import { TextField } from 'mui-rff';
import { Form } from "react-final-form";
import { connect } from 'react-redux';
import { saveCardDataRequest } from '../../actions.js'

const validate = values => {
    const errors = {};

    if (!values.cardnumber) {
        errors.cardnumber = 'Это обязательное поле';
    }
    if (!values.expirydate) {
        errors.expirydate = 'Это обязательное поле';
    }
    if (!values.cardname) {
        errors.cardname = 'Это обязательное поле';
    }
    if (!values.CVC) {
        errors.CVC = 'Это обязательное поле';
    }
    return errors;
};

function CardForm(props) {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    let handleSubmit = async values => {
        await sleep(300);
        props.saveCardDataRequest( values )
    }

    return (
        <Form
            onSubmit={handleSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
                <form 
                    id='profileForm' 
                    onSubmit={handleSubmit}
                    noValidate
                >
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
                                <Paper style={{width: '324px', height: '190px', padding: '30px'}}>
                                    <InputLabel shrink required>Номер карты</InputLabel>
                                    <TextField 
                                        style={{marginBottom: '25px'}}
                                        name='cardnumber'
                                        placeholder='0000 0000 0000 0000'
                                        type='number'/>
                                    <InputLabel shrink required>Срок действия</InputLabel>
                                    <TextField 
                                        name='expirydate'
                                        placeholder='00/00'
                                        type='date'/>    
                                </Paper>
                            </Grid>
                            <Grid item>                                    
                                <Paper style={{width: '324px', height: '190px', padding: '30px'}}>
                                        <InputLabel shrink required>Имя владельца</InputLabel>
                                        <TextField 
                                            style={{marginBottom: '25px'}}
                                            name='cardname'
                                            placeholder='USER NAME'
                                            type='text'/> 
                                        <InputLabel shrink required>CVC</InputLabel>
                                        <TextField 
                                            name='CVC'
                                            placeholder='CVC'
                                            type='number'/> 
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid item><Button 
                            type='submit' 
                            form='profileForm'
                            color='primary'
                            variant='contained'
                            onClick={() => props.onMap(false)}
                            >Сохранить</Button>
                        </Grid>
                    </Grid>
                </form>
            )}
        />
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

export default connect(mapStateToProp, mapDispatchToProps)(CardForm)