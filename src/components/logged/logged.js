import React, {useState} from 'react';
import Map from '../map/map.js';
import Profile from '../profile/profile.js';

const logPages = {
    'Карта': Map,
    'Профиль': Profile
}

function Logged(props) {
    const [page, setPage] = useState(props.initialPage);

    let loggedPageHandler = (page) => {
        setPage(page)
    }

    let CurrentLoggedPage = logPages[page];

    return (
        <div>
            <CurrentLoggedPage onSwitch={loggedPageHandler} />
        </div>
    )
}

Logged.defaultProps = {
    pages: logPages,
    initialPage: 'Карта'
}


export default Logged