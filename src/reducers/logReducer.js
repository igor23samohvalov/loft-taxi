const initialState = {
    isLoggedIn: false
}

const LOG_IN = 'LOG_IN';

const LOG_OUT = 'LOG_OUT';

function logSwitcher(state = initialState, action) {
    switch (action.type) {
        case LOG_IN:
            return { 
                isLoggedIn: true, 
                username: action.payload.username,
                password: action.payload.password
             };
        case LOG_OUT:
            return { isLoggedIn: false};
        default:
            return state;
    }
}
export default logSwitcher