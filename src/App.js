import React from 'react';
import Authorization from './components/authorization/authorization.js';
import Registration from './components/registration/registration.js';
import Map from './components/map/map.js';
import Profile from './components/profile/profile.js';
import './App.css';

class App extends React.Component {
    state = {
        page: '1'
    }

    pageHandler = (e) => {
        this.setState({
            page: e.target.dataset.id
        })
    }

    render() {
        let Screen;
        
        if (this.state.page === '1') {
            Screen = <Authorization onClick={this.pageHandler}/>;
        } else if (this.state.page === '2') {
            Screen = <Registration onClick={this.pageHandler}/>
        } else if (this.state.page === '3') {
            Screen = <Map onClick={this.pageHandler}/>
        } else if (this.state.page === '4') {
            Screen = <Profile onClick={this.pageHandler}/>
        }
        return (
          <div className='main-container'>
              {Screen}
          </div>
        )
    };
}

export default App;