import React, {useContext} from 'react';
import LogScreen from './components/logscreen/logscreen.js';
import Logged from './components/logged/logged.js';
import './App.css';
import { AuthContext } from './AuthContext.js';

function App() {
    const value = useContext(AuthContext);

    return (
        <div className='main-container'>
            {value.isLoggedIn ? <Logged /> : <LogScreen />}
        </div>
    )
}

export default App;