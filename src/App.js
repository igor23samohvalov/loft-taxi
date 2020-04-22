import React, {useState} from 'react';
import LogScreen from './components/logscreen/logscreen.js';
import Map from './components/map/map.js';
import Profile from './components/profile/profile.js';
import './App.css';

const pages = {
    'toLogScreen': LogScreen,
    'toMap': Map,
    'toProfile': Profile 
}

function App() {
    const [page, setPage] = useState('toLogScreen');

    let pageHandler = (e) => {
        setPage(e.target.dataset.id)
        console.log(e.target.dataset.id)
    }

    let CurrentPage = pages[page];

    return (
        <div className='main-container'>
            <CurrentPage onClick={pageHandler}/>
        </div>
    )
}

export default App;