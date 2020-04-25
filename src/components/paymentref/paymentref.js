import React from 'react';
import Map from '../map/map.js';
import './paymentref.css'
import {Paper, Grid, Button, Typography} from '@material-ui/core';

function PaymentRef(props) {
    return (
        <Paper className='payment-container'>
            <Grid className='payment-container-grid' container justify='space-between' direction='column'>
                <Typography variant='h4'>
                    Заполните платежные<br></br> данные
                </Typography>
                <p>Укажите информацию о банковской карте, чтобы сделать<br></br> заказ.</p>
                <Button
                    color='primary'
                    variant='contained'
                    type='button'
                    data-id='Профиль'
                    onClick={props.onSwitch}
                >Перейти в профиль</Button>
            </Grid>
        </Paper>
    )
}

export default PaymentRef