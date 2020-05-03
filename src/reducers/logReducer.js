const initialState = {
    isLoggedIn: false
}

const LOG_IN = 'LOG_IN';

const LOG_OUT = 'LOG_OUT';

const SAVE_CARD_DATA = 'SAVE_CARD_DATA';

function logSwitcher(state = initialState, action) {
    switch (action.type) {
        case LOG_IN:
            return { 
                isLoggedIn: true, 
                username: action.payload.username,
                password: action.payload.password
             };
        case LOG_OUT:
            return { isLoggedIn: false };
        case SAVE_CARD_DATA:
            return {
                ...state,
                cardNumber: action.payload.cardnumber,
                expiryDate: action.payload.expirydate,
                cardName: action.payload.cardname,
                CVC: action.payload.cvc
            }
        default:
            return state;
    }
}
export default logSwitcher