import React, {useState} from 'react';
import {Paper, Grid, Button, TextField, MenuItem} from '@material-ui/core';

const routeContainer = {
    position: 'absolute',
    top: '120px',
    left: '20px',
    padding: '44px 60px',
    width: '30%',
    flexWrap: 'wrap',
}

const currencies = [
    {
      value: 'Пулково (LED)'
    },
    {
      value: 'Шаверма на Невском'
    },
    {
      value: 'Инфекционная больница им. Боткина'
    },
    {
      value: 'Волковское кладбище'
    },
  ];

function RouteConstructor() {
    const [currency, setCurrency] = useState('');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <Paper style={routeContainer}>
             <form id='route'>
                <Grid container justify='space-between' direction='column' style={{height: '200px'}}>
                    <TextField
                        placeholder='Откуда'
                        select
                        type='text'
                        value={currency}
                        onChange={handleChange}
                        fullWidth>
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.value}
                                </MenuItem>
                            ))}
                    </TextField>
                    <TextField
                        placeholder='Куда'
                        select
                        type='text'
                        fullWidth>
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.value}
                                </MenuItem>
                            ))}
                    </TextField>
                    <Button
                        color='default'
                        variant='contained'
                        type='submit'
                        form='authorization'
                    >Вызвать такси</Button>
                </Grid>
            </form>
        </Paper>
    )
}

export default RouteConstructor