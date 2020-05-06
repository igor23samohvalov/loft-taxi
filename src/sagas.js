import { takeEvery, call, put } from 'redux-saga/effects';
import { 
    logInRequest, logIn, 
    logOutRequest, logOut, 
    regRequest, regIn,
    saveCardDataRequest, saveCardData } from './actions'

const getLog = (payload) => 
    fetch(`https://loft-taxi.glitch.me/auth`, {
        method: 'POST',
        body: JSON.stringify({
            "email": `${payload.username}`,
            "password": `${payload.password}`
        }),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => data)

export function* handleLogRequest() {
    yield takeEvery(logInRequest, function* (action){
        localStorage.setItem('name', action.payload.username);
        localStorage.setItem('password', action.payload.password);
        try {
            const logResult = yield call(getLog, action.payload);
            logResult.success ? yield put(logIn(action.payload)) : console.log(logResult)
        } catch (error) {
            console.log(error)
        }
    })
    yield takeEvery(logOutRequest, function* () {
        yield put(logOut())
    })
}

export function* handleCardData() {
    yield takeEvery(saveCardDataRequest, function* (action){
        try {
            const cardResult = yield call(getCardData, action.payload);
            cardResult.success ? yield put(saveCardData(action.payload)) : console.log(cardResult)
        } catch (error) {
            console.log(error)
        }
    })
}

const getCardData = (payload) => 
    fetch(`https://loft-taxi.glitch.me/card`, {
        method: 'POST',
        body: JSON.stringify({
            "cardNumber": `${payload.cardnumber}`,
            "expiryDate": `${payload.expirydate}`,
            "cardName": `${payload.cardname}`,
            "cvc": `${payload.cvc}`,
            "token": "AUTH_TOKEN"
        }),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => data)

    export function* handleRegData() {
        yield takeEvery(regRequest, function* (action){
            try {
                const regResult = yield call(getRegData, action.payload);
                regResult.success ? yield put(regIn(action.payload)) : console.log(regResult)
            } catch (error) {
                console.log(error)
            }
        })
    }
    
    const getRegData = (payload) => 
        fetch(`https://loft-taxi.glitch.me/register`, {
            method: 'POST',
            body: JSON.stringify({
                "email": `${payload.email}`,
                "password": `${payload.password}`,
                "name": `${payload.name}`,
                "surname": `${payload.surname}`
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => data)
