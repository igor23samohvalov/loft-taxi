import {logIn, logInRequest, logOut, logOutRequest, saveCardData, saveCardDataRequest} from './actions.js'

export const logMiddleware = store => next => (action) => {
    if (action.type === logInRequest.toString()) {
        let username = action.payload.username,
            password = action.payload.password;

        localStorage.setItem('name', username);
        localStorage.setItem('password', password);

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
        console.log(action)
        let cardnumber = action.payload.cardnumber,
            expirydate = action.payload.expirydate,
            cardname = action.payload.cardname,
            cvc = action.payload.CVC;

        fetch(`https://loft-taxi.glitch.me/card`, {
            method: 'POST',
            body: JSON.stringify({
                "cardNumber": `${cardnumber}`,
                "expiryDate": `${expirydate}`,
                "cardName": `${cardname}`,
                "cvc": `${cvc}`,
                "token": "AUTH_TOKEN"
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            data.success ? store.dispatch(saveCardData({cardnumber, expirydate, cardname, cvc})) : console.log(data.error)
            console.log(data)
        })
        .catch(error => {
            console.log(error)
        })
    }
    next(action)
}