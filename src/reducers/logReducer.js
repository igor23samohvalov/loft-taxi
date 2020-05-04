const initialState = {
    isLoggedIn: false,
    hasPaymentInfo: false
}

const LOG_IN = 'LOG_IN';

const LOG_OUT = 'LOG_OUT';

const SAVE_CARD_DATA = 'SAVE_CARD_DATA';

function logSwitcher(state = initialState, action) {
    switch (action.type) {
 
        case LOG_IN:
            return { 
                ...state,
                isLoggedIn: true, 
                username: action.payload.username,
                password: action.payload.password
             };
        case LOG_OUT:
            return { 
                isLoggedIn: false,
                hasPaymentInfo: false
            };
        case SAVE_CARD_DATA:
            return {
                ...state,
                hasPaymentInfo: true,
                cardNumber: action.payload.cardnumber,
                expiryDate: action.payload.expirydate,
                cardName: action.payload.cardname,
                CVC: action.payload.CVC
            }
        default:
            return state;
    }
}
export default logSwitcher