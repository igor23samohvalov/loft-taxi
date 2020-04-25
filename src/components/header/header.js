import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AuthContext } from '../../AuthContext';
import {AppBar, Toolbar, Button, Typography} from '@material-ui/core'
import {Logo} from 'loft-taxi-mui-theme'

const useStyles = makeStyles({
    root: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

const links = [
    {
        'key': '1',
        'href': '#map',
        'value': 'Карта'
    },
    {
        'key': '2',
        'href': '#profile',
        'value': 'Профиль'
    },
    {
        'key': '3',
        'href': '#',
        'value': 'Выйти'
    }
]

function Header(props) {
    const value = useContext(AuthContext); 

    const classes = useStyles();

    let handleLinkClick = (event) => {
        const {target} = event;

        const {onSwitch} = props;

        if (target && onSwitch) {
            if (target.textContent === 'Выйти') {
                value.logout();
            } else {
                onSwitch(target.textContent)
            }
        }
    }

    return (
        <AppBar color='inherit' position='static' classes={{root: classes.root}}>
                <Typography style={{paddingLeft: '20px', alignSelf: 'flex-start'}}>
                    <Logo />
                </Typography>
                <Toolbar variant='regular'>
                    {links.map((link) => {
                        return <Button 
                                    key={link.key} 
                                    href={link.href} 
                                    type='button'
                                    onClick={handleLinkClick}>
                                    {link.value}
                                </Button>
                    })}
                </Toolbar>
        </AppBar>
    )
}


Header.propTypes = {
    onSwitch: PropTypes.func.isRequired
}

export default Header