import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function CardDone() {

    return (
        <>
            <p>Платёжные данные обновлены. Теперь вы можете заказывать такси.</p>
            <Link to='/logged/map' style={{marginTop: '50px'}}><Button
                color='primary'
                variant='contained'
                type='button'
            >Сделайте новый заказ</Button></Link>
        </>
    )
}

export default CardDone