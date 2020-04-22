import React, {useContext} from 'react';
import './header.css';
import PropTypes from 'prop-types';
import { AuthContext } from '../../AuthContext';
import {AppBar, Link} from '@material-ui/core'

const links = [
    {
        'key': '1',
        'href': '#map',
        'dataId': 'toMap',
        'value': 'Карта'
    },
    {
        'key': '2',
        'href': '#profile',
        'dataId': 'toProfile',
        'value': 'Профиль'
    },
    {
        'key': '3',
        'href': '#',
        'dataId': 'toLogScreen',
        'value': 'Выйти'
    }
]

function Header(props) {
    const value = useContext(AuthContext); 

    let handleLinkClick = (event) => {
        const {target} = event;

        const {onClick} = props;

        if (target && onClick) {
            if (target.dataset.id === 'toLogScreen') {
                value.logout();
            } 
            onClick(event)
        }
    }
    return (
        <AppBar color="default">
            {links.map((link) => {
                return <Link key={link.key} 
                        href={link.href} 
                        data-id={link.dataId} 
                        onClick={handleLinkClick}
                        >{link.value}
                    </Link>
            })}
        </AppBar>
    )
}


Header.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Header