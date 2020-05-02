import {logIn, logInRequest, logOut, logOutRequest, saveCardDataRequest} from './actions.js'

export const logMiddleware = store => next => (action) => {
    if (action.type === logInRequest.toString()) {
        let username = action.payload.username;
        let password = action.payload.password;
        fetch(`https://loft-taxi.glitch.me/auth`, {
            method: 'POST',
            body: JSON.stringify({
                "email": `${username}`,
                "password": `${password}`
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            data.success ? store.dispatch(logIn({username, password})) : console.log(data.error)
            console.log(data)
        })
        .catch(error => {
            console.log(error)
        })
    } else if (action.type === logOutRequest.toString()) {
        store.dispatch(logOut())
    }
    next(action)
}

export const cardDataMiddleware = store => next => action => {
    if (action.type === saveCardDataRequest.toString()) {
        fetch(`https://loft-taxi.glitch.me/card`, {
            method: 'POST',
            body: JSON.stringify({
                "cardNumber": "2000 0000 0000 0000",
                "expiryDate": "01/22",
                "cardName": "TEST",
                "cvc": "910",
                "token": "AUTH_TOKEN"
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.log(error)
        })
    }
    next(action)
}