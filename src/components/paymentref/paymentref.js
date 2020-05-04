import React from 'react';
import {Paper, Grid, Button, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';

const paymentContainer = {
    position: 'absolute',
    top: '120px',
    left: '20px',
    padding: '44px 60px',
    maxWidth: '30%',
    flexWrap: 'wrap',
}

function PaymentRef() {
    
    return (
        <Paper style={paymentContainer}>
            <Grid container justify='space-between' direction='column' style={{height: '200px'}}>
                <Typography variant='h4'>
                    Заполните платежные данные
                </Typography>
                <p>Укажите информацию о банковской карте, чтобы сделать заказ.</p>
                <Link to='/logged/profile'><Button
                    color='primary'
                    variant='contained'
                    type='button'
                    data-id='Профиль'
                >Перейти в профиль</Button></Link>
            </Grid>
        </Paper>
    )
}

export default PaymentRef