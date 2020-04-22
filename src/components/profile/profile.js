import React from 'react';
import Header from '../header/header.js';
import './profile.css';
import {Paper, Grid, Button, Link, FormLabel, Typography, Input} from '@material-ui/core'

function Profile(props) {
    return (
        <div>
            <Header onClick={props.onClick}/>
            <div className='profile-container'>
                <div className='profile'>
                    <Typography>Профиль</Typography>
                    <Typography>Способ оплаты</Typography>
                    <form action='' href='#' id='profileForm'>
                        <div>
                            <FormLabel>Номер карты*</FormLabel>
                            <Input type='number' placeholder='0000 0000 0000 0000'></Input>
                            <FormLabel>Срок действия*</FormLabel>
                            <Input type='number' placeholder='00/00'></Input>
                        </div>
                        <div>
                            <FormLabel>Имя владельца*</FormLabel>
                            <Input type='text' placeholder='USER NAME'></Input>
                            <FormLabel>CVC*</FormLabel>
                            <Input type='number' placeholder='CVC'></Input>
                        </div>
                    </form>
                    <Button type='submit'>Сохранить</Button>
                </div>
            </div>
        </div>
    )
}

export default Profile;