import React, {useState} from 'react';
import Authorization from '../authorization/authorization.js';
import Registration from '../registration/registration.js';
import './logscreen.css';
import PropTypes from 'prop-types';

const loginPages = {
    'toAuthorization': Authorization,
    'toRegistration': Registration
}

function LogScreen(props) {
    const [page, setPage] = useState('toAuthorization');
    
    let loginPageHandler = (e) => {
        setPage(e.target.dataset.id)
    }

    let CurrentLoginPage = loginPages[page];

    return (
        <div>
            <CurrentLoginPage onClick={loginPageHandler} onMap={props.onClick}/>
        </div>
    )
}

LogScreen.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default LogScreen;