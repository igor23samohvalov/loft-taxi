import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { theme } from "loft-taxi-mui-theme";
import { MuiThemeProvider } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';
import { Provider} from 'react-redux';
import createStore from './store.js';
import { BrowserRouter } from 'react-router-dom';


let store = createStore(),
    username = localStorage.getItem('name') ? localStorage.getItem('name') : '',
    password = localStorage.getItem('password') ? localStorage.getItem('password') : ''

ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <Provider store={store}>
                <BrowserRouter>
                    <App username={username} password={password}/>
                </BrowserRouter>
            </Provider>
        </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
