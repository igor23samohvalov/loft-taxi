import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Typography} from '@material-ui/core'
import { Logo} from 'loft-taxi-mui-theme'
import { Link } from 'react-router-dom';
import { logOutRequest } from '../../actions.js'
import { connect } from 'react-redux';

const useStyles = makeStyles({
    root: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

const links = [
    {
        'key': '1',
        'url': '/logged',
        'value': 'Карта'
    },
    {
        'key': '2',
        'url': '/logged/profile',
        'value': 'Профиль'
    }
]

function Header(props) {
    const classes = useStyles();

    return (
        <AppBar color='inherit' position='static' classes={{root: classes.root}}>
                <Typography style={{paddingLeft: '20px', alignSelf: 'flex-start'}}>
                    <Logo />
                </Typography>
                <Toolbar variant='regular'>
                    {links.map((link) => {
                        return <Link to={`${link.url}`} key={link.key} ><Button 
                                    type='button'>
                                    {link.value}
                                </Button></Link>
                    })}
                    <Link to='/'><Button type='button' onClick={props.logOutRequest}>Выйти</Button></Link>
                </Toolbar>
        </AppBar>
    )
}

const mapStateToProp = state => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logOutRequest: () => dispatch(logOutRequest())
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(Header)