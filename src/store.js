import { createStore, compose, applyMiddleware } from 'redux';
import { logMiddleware, cardDataMiddleware } from './middlewares.js';
import createSagaMiddleWare from 'redux-saga';
import { handleLogRequest, handleCardData, handleRegData } from './sagas.js';
import logReducer from './reducers/logReducer.js';

const sagaMiddleware = createSagaMiddleWare();

const createAppStore = () => {
    const store = createStore(
        logReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : noop => noop,
        ),
    );

    sagaMiddleware.run(handleLogRequest);
    sagaMiddleware.run(handleCardData);
    sagaMiddleware.run(handleRegData);

    return store
}

export default createAppStore