import React from 'react';
import LogScreen from './components/logscreen/logscreen.js';
import Map from './components/map/map.js';
import Profile from './components/profile/profile.js';
import './App.css';

class App extends React.Component {
    state = {
        page: 'toLogScreen'
    }

    pageHandler = (e) => {
        this.setState({
            page: e.target.dataset.id
        })
    }

    render() {
        const pages = [
            {
                'id': 'toLogScreen',
                'name': LogScreen,
                'listener': this.pageHandler
            },
            {
                'id': 'toMap',
                'name': Map,
                'listener': this.pageHandler
            },
            {
                'id': 'toProfile',
                'name': Profile,
                'listener': this.pageHandler
            }
        ]

        let Screen;

        for (let page of pages) {
            if (this.state.page === page.id) {
                Screen = <page.name onClick={page.listener}/>
            }
        }

        return (
          <div className='main-container'>
              {Screen}
          </div>
        )
    };
}

export default App;