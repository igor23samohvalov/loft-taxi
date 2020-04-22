import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { theme } from "loft-taxi-mui-theme";
import { MuiThemeProvider } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';
import { AuthProvider} from './AuthContext.js';


ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <AuthProvider>
                <App />
            </AuthProvider>
        </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
