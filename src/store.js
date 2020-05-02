import { createStore, compose, applyMiddleware } from 'redux';
import { logMiddleware, cardDataMiddleware } from './middlewares.js';
import logReducer from './reducers/logReducer.js';

const createAppStore = () => {
    const store = createStore(
        logReducer,
        compose(
            applyMiddleware(logMiddleware),
            applyMiddleware(cardDataMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : noop => noop,
        ),
    );

    return store
}

export default createAppStore