import React from 'react';
import Logged from './components/logged/logged.js';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Authorization from './components/authorization/authorization.js';
import Registration from './components/registration/registration.js'
import logSwitcher from './reducers/logReducer.js';
import { Provider} from 'react-redux';
import { createStore } from 'redux';

let store = createStore(logSwitcher);

function App() {

    return (
        <Provider store={store}>
            <Router>
                <div className='main-container'>
                    <Switch>
                        <Route exact path="/" component={Authorization}>
                            {store.getState().isLoggedIn ? <Redirect to='/logged' /> : <Authorization />}
                        </Route>
                        <Route path='/registration' component={Registration} />
                        <Route path='/logged' component={Logged}/>
                    </Switch>
                </div>
            </Router>
        </Provider>
    )
}

export default App;