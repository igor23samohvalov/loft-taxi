import React, { useState } from 'react';
import Header from '../header/header.js';
import { Paper, Grid, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { saveCardDataRequest } from '../../actions.js'
import CardForm from './cardform.js';
import CardDone from './carddone.js';


function Profile(props) {
    const [block, setBlock] = useState( true )

    return (
        <div data-testid='profTest'>
            <Header onSwitch={props.onSwitch}/>
            <Grid 
                container
                alignContent='center'
                direction='column'
            >
                <Paper style={{padding: '44px 60px', marginTop: '60px'}}>
                    <Grid
                    container
                    alignItems='center'
                    direction='column'>
                        <Typography
                            variant='h4'
                            >Профиль
                        </Typography>
                        <Typography variant='body1' style={{marginBottom: '40px'}}>
                            Способ оплаты
                        </Typography>
                        {block ? (
                            <CardForm onMap={setBlock}/>
                        ) : (
                            <CardDone/>
                        )}
                    </Grid>
                </Paper>
            </Grid>
        </div>
    )
}

const mapStateToProp = state => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveCardDataRequest: (profileData) => dispatch(saveCardDataRequest(profileData))
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(Profile)