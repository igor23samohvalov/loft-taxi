import React from 'react';
import Map from '../map/map.js';
import Profile from '../profile/profile.js';
import { Switch, Route, Redirect } from 'react-router-dom';

function Logged() {

    return (
        <div>
            {/* {!value.isLoggedIn ? <Redirect to='/' /> :  */}
                <Switch>
                    <Route exact path='/logged' component={Map}/>
                    <Route path ='/logged/profile' component={Profile}/>
                </Switch>
            {/* } */}
        </div>
    )
}

export default Logged