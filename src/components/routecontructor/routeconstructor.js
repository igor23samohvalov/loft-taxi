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

function RouteConstructor(props) {
    const [whereFrom, setWhereFrom] = useState(''),
          [where, setWhere] = useState('');

    let  handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${whereFrom}.json?proximity=-30.2860,59.9659&access_token=pk.eyJ1Ijoic2FuZHlwbGFua3RvbiIsImEiOiJjazk5Z2M2YjMwMGwzM210NjdybzJsb2dpIn0.5VnHQjX3Hw1YEaR918xOIA`)
        .then(response => response.json())
        .then(data => props.onMapChange(data.features[0].center))
    }

    return (
        <Paper style={routeContainer}>
             <form id='route' onSubmit={handleSubmit}>
                <Grid container justify='space-between' direction='column' style={{height: '200px'}}>
                    <Autocomplete
                        id="where-from"
                        options={currencies}
                        renderInput={(params) => <TextField {...params} onSelect={(e) => setWhereFrom(e.target.value)} placeholder='Откуда'  variant="outlined" fullWidth/>}
                    />
                    <Autocomplete
                        id="where"
                        options={currencies}
                        renderInput={(params) => <TextField {...params} onSelect={(e) => setWhere(e.target.value)} placeholder='Куда'  variant="outlined" fullWidth/>}
                    />
                    <Button
                        color='default'
                        variant='contained'
                        type='submit'
                        form='route'
                    >Вызвать такси</Button>
                </Grid>
            </form>
        </Paper>
    )
}

export default RouteConstructor