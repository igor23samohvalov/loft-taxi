import React, {useState} from 'react';
import {Paper, Grid, Button, TextField} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

const routeContainer = {
    position: 'absolute',
    top: '120px',
    left: '20px',
    padding: '44px 60px',
    width: '30%',
    flexWrap: 'wrap',
}

const currencies = [
    'Пулково (LED)', 
    'Шаверма на Невском', 
    'Инфекционная больница им. Боткина',
    'Волковское кладбище'
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
                    <Autocomplete
                        onChange={handleChange}
                        id="where-from"
                        options={currencies}
                        renderInput={(params) => <TextField {...params} placeholder='Откуда'  variant="outlined" fullWidth/>}
                    />
                    <Autocomplete
                        onChange={handleChange}
                        id="where"
                        options={currencies}
                        renderInput={(params) => <TextField {...params} placeholder='Куда'  variant="outlined" fullWidth/>}
                    />
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