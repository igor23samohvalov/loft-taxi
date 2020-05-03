import React from 'react';
import Profile from './components/profile/profile.js';
import Map from './components/map/map.js'
import './App.css';
import { Route, Redirect, Switch} from 'react-router-dom';
import Authorization from './components/authorization/authorization.js';
import Registration from './components/registration/registration.js';
import { connect } from 'react-redux';


function App(props) {

    return (
        <div className='main-container'>
            {props.isLoggedIn ? (
                <Switch>
                    <Route exact path='/logged' component={Map}/>
                    <Route path='/logged/profile' component={Profile}/>
                    <Redirect to='/logged'/>
                </Switch>
            ) : (
                <Switch>
                    <Route exact path="/" render={() => <Authorization username={props.username} password={props.password}/>}/>
                    <Route path='/registration' component={Registration}/>
                    <Redirect to='/'/>
                </Switch>
            )}
        </div>
    )
}

const mapStateToProp = state => {

    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProp)(App)