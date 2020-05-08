import React from 'react';
import {Paper, Grid, Button, Typography} from '@material-ui/core';

const routeContainer = {
    position: 'absolute',
    top: '120px',
    left: '20px',
    padding: '44px 60px',
    width: '30%',
    flexWrap: 'wrap',
}

function NewRoute(props) {
    let handleClick = () => {
        props.onMap.removeLayer('route');
        props.onMap.removeSource('route');
        props.onNewOrder(false)
    }

    return (
        <Paper style={routeContainer}>
            <Grid container justify='space-between' direction='column' style={{height: '200px'}}>
                <Typography variant='h4'>
                    Заказ размещён
                </Typography>
                <p>Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</p>
                <Button
                    color='primary'
                    variant='contained'
                    type='button'
                    onClick={handleClick}
                >Сделайте новый заказ</Button>
            </Grid>
        </Paper>
    )
}

export default NewRoute