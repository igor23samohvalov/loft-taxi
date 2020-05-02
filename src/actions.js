import { createAction } from 'redux-actions';

export const logInRequest = createAction('LOG_IN_REQUEST');
export const logIn = createAction('LOG_IN');
export const logOutRequest = createAction('LOG_OUT_REQUEST');
export const logOut = createAction('LOG_OUT');
export const saveCardDataRequest = createAction('SAVE_CARD_DATA_REQUEST');