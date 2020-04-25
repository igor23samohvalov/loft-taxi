import React from 'react';
import {Paper, Grid, Button, Typography} from '@material-ui/core';
import PropTypes from 'prop-types';

const paymentContainer = {
    position: 'absolute',
    top: '120px',
    left: '20px',
    padding: '44px 60px',
    maxWidth: '30%',
    flexWrap: 'wrap',
}

function PaymentRef(props) {
    let handleLinkClick = (event) => {
        const {target} = event;
        
        const {onSwitch} = props;
        
        if (target.textContent === 'Перейти в профиль' && onSwitch) {
            onSwitch('Профиль')
        } 
    }
    
    return (
        <Paper style={paymentContainer}>
            <Grid container justify='space-between' direction='column' style={{height: '200px'}}>
                <Typography variant='h4'>
                    Заполните платежные данные
                </Typography>
                <p>Укажите информацию о банковской карте, чтобы сделать заказ.</p>
                <Button
                    color='primary'
                    variant='contained'
                    type='button'
                    data-id='Профиль'
                    onClick={handleLinkClick}
                >Перейти в профиль</Button>
            </Grid>
        </Paper>
    )
}

PaymentRef.propTypes = {
    onSwitch: PropTypes.func.isRequired
}

export default PaymentRef