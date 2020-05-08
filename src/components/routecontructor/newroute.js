import React, {useState, useEffect} from 'react';
import {Paper, Grid, Button, TextField} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { drawRoute } from './drawRoute.js';

const routeContainer = {
    position: 'absolute',
    top: '120px',
    left: '20px',
    padding: '44px 60px',
    width: '30%',
    flexWrap: 'wrap',
}

function NewRoute(props) {
    const [whereFrom, setWhereFrom] = useState(''),
          [where, setWhere] = useState(''),
          [currencies, setCurrencies] = useState([]),
          [isDisabled, setDisable] = useState(false);

    useEffect(() => {
        let unmounted = false;

        fetch('https://loft-taxi.glitch.me/addressList')
            .then(response => response.json())
            .then(data => setCurrencies(data.addresses));

        return () => (unmounted = true)
    }, [])

    useEffect(() => {
        if( whereFrom === '' || where === '') {
            setDisable(true)
        } else {
            setDisable(false)
        }
    }, [whereFrom, where])

    let handleSubmit = (e) => {
        e.preventDefault();
        
        fetch(`https://loft-taxi.glitch.me/route?address1=${whereFrom}&address2=${where}`)
            .then(response => response.json())
            .then(data => drawRoute(props.onMap, data))
            .then(() => props.onNewOrder(true))
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
                        color='primary'
                        variant='contained'
                        type='submit'
                        form='route'
                        disabled={isDisabled}
                    >Вызвать такси</Button>
                </Grid>
            </form>
        </Paper>
    )
}

export default NewRoute