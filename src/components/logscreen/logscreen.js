import React, {useState} from 'react';
import Authorization from '../authorization/authorization.js';
import Registration from '../registration/registration.js';
import {Grid} from '@material-ui/core';
import {Logo} from 'loft-taxi-mui-theme'

const loginPages = {
    'toAuthorization': Authorization,
    'toRegistration': Registration
}

function LogScreen(props) {
    const [page, setPage] = useState(props.initialPage);

    let loginPageHandler = (e) => {
        setPage(e.target.dataset.id)
    }

    let CurrentLoginPage = loginPages[page];

    return (
        <Grid container alignItems='center' justify='space-evenly' style={{height: '100vh'}}>
            <Logo />
            <CurrentLoginPage onSwitch={loginPageHandler} />
        </Grid>
    )
}

LogScreen.defaultProps = {
    pages: loginPages,
    initialPage: 'toAuthorization'
}

export default LogScreen;