import React from 'react';
import './header.css';

class Header extends React.Component {

    handleLinkClick = (event) => {
        const {target} = event;

        const {onClick} = this.props;

        if (target && onClick) {
            onClick(event)
        }
    }

    render () {
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
        
        return (
            <header>
                {links.map((link) => {
                    return <a key={link.key} 
                              href={link.href} 
                              data-id={link.dataId} 
                              onClick={this.handleLinkClick}
                              >{link.value}
                           </a>
                })}
            </header>
        )
    }
}

export default Header